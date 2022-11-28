package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Projects struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewProjects(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Projects {
	return &Projects{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ServicebrokerProjectsBrokersInstancesServiceBindingsList - Lists all the bindings in the instance
func (s *Projects) ServicebrokerProjectsBrokersInstancesServiceBindingsList(ctx context.Context, request operations.ServicebrokerProjectsBrokersInstancesServiceBindingsListRequest) (*operations.ServicebrokerProjectsBrokersInstancesServiceBindingsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha1/{parent}/service_bindings", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServicebrokerProjectsBrokersInstancesServiceBindingsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// ServicebrokerProjectsBrokersServiceInstancesList - Lists all the instances in the brokers
// This API is an extension and not part of the OSB spec.
// Hence the path is a standard Google API URL.
func (s *Projects) ServicebrokerProjectsBrokersServiceInstancesList(ctx context.Context, request operations.ServicebrokerProjectsBrokersServiceInstancesListRequest) (*operations.ServicebrokerProjectsBrokersServiceInstancesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha1/{parent}/service_instances", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServicebrokerProjectsBrokersServiceInstancesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// ServicebrokerProjectsBrokersV2CatalogList - Lists all the Services registered with this broker for consumption for
// given service registry broker, which contains an set of services.
// Note, that Service producer API is separate from Broker API.
func (s *Projects) ServicebrokerProjectsBrokersV2CatalogList(ctx context.Context, request operations.ServicebrokerProjectsBrokersV2CatalogListRequest) (*operations.ServicebrokerProjectsBrokersV2CatalogListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha1/{parent}/v2/catalog", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServicebrokerProjectsBrokersV2CatalogListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// ServicebrokerProjectsBrokersV2ServiceInstancesCreate - Provisions a service instance.
// If `request.accepts_incomplete` is false and Broker cannot execute request
// synchronously HTTP 422 error will be returned along with
// FAILED_PRECONDITION status.
// If `request.accepts_incomplete` is true and the Broker decides to execute
// resource asynchronously then HTTP 202 response code will be returned and a
// valid polling operation in the response will be included.
// If Broker executes the request synchronously and it succeeds HTTP 201
// response will be furnished.
// If identical instance exists, then HTTP 200 response will be returned.
// If an instance with identical ID but mismatching parameters exists, then
// HTTP 409 status code will be returned.
func (s *Projects) ServicebrokerProjectsBrokersV2ServiceInstancesCreate(ctx context.Context, request operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest) (*operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha1/{parent}/v2/service_instances/{instance_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// ServicebrokerProjectsBrokersV2ServiceInstancesDelete - Deprovisions a service instance.
// For synchronous/asynchronous request details see CreateServiceInstance
// method.
// If service instance does not exist HTTP 410 status will be returned.
func (s *Projects) ServicebrokerProjectsBrokersV2ServiceInstancesDelete(ctx context.Context, request operations.ServicebrokerProjectsBrokersV2ServiceInstancesDeleteRequest) (*operations.ServicebrokerProjectsBrokersV2ServiceInstancesDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha1/{parent}/v2/service_instances/{instanceId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServicebrokerProjectsBrokersV2ServiceInstancesDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// ServicebrokerProjectsBrokersV2ServiceInstancesGet - Gets the given service instance from the system.
// This API is an extension and not part of the OSB spec.
// Hence the path is a standard Google API URL.
func (s *Projects) ServicebrokerProjectsBrokersV2ServiceInstancesGet(ctx context.Context, request operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetRequest) (*operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha1/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperation - Returns the state of the last operation for the service instance.
// Only last (or current) operation can be polled.
func (s *Projects) ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperation(ctx context.Context, request operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationRequest) (*operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha1/{parent}/v2/service_instances/{instanceId}/last_operation", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// ServicebrokerProjectsBrokersV2ServiceInstancesPatch - Updates an existing service instance.
// See CreateServiceInstance for possible response codes.
func (s *Projects) ServicebrokerProjectsBrokersV2ServiceInstancesPatch(ctx context.Context, request operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest) (*operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha1/{parent}/v2/service_instances/{instance_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate - CreateBinding generates a service binding to an existing service instance.
// See ProviServiceInstance for async operation details.
func (s *Projects) ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate(ctx context.Context, request operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest) (*operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha1/{parent}/v2/service_instances/{instanceId}/service_bindings/{binding_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet - GetBinding returns the binding information.
func (s *Projects) ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet(ctx context.Context, request operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest) (*operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha1/{parent}/v2/service_instances/{instanceId}/service_bindings/{bindingId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation - Returns the state of the last operation for the binding.
// Only last (or current) operation can be polled.
func (s *Projects) ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation(ctx context.Context, request operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest) (*operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha1/{parent}/v2/service_instances/{instanceId}/service_bindings/{bindingId}/last_operation", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}
