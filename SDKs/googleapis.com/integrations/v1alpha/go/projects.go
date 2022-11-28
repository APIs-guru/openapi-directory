package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
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

// IntegrationsProjectsLocationsAppsScriptProjectsCreate - Creates an Apps Script project.
func (s *Projects) IntegrationsProjectsLocationsAppsScriptProjectsCreate(ctx context.Context, request operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateRequest) (*operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/appsScriptProjects", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsAppsScriptProjectsLink - Links a existing Apps Script project.
func (s *Projects) IntegrationsProjectsLocationsAppsScriptProjectsLink(ctx context.Context, request operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest) (*operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/appsScriptProjects:link", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsConnectionsList - Lists Connections in a given project and location.
func (s *Projects) IntegrationsProjectsLocationsConnectionsList(ctx context.Context, request operations.IntegrationsProjectsLocationsConnectionsListRequest) (*operations.IntegrationsProjectsLocationsConnectionsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/connections", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsConnectionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaListConnectionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaListConnectionsResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasList - Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.
func (s *Projects) IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasList(ctx context.Context, request operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListRequest) (*operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/runtimeActionSchemas", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasList - Lists the JSON schemas for the properties of runtime entities, filtered by entity name.
func (s *Projects) IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasList(ctx context.Context, request operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest) (*operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/runtimeEntitySchemas", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsAuthConfigsCreate - Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
func (s *Projects) IntegrationsProjectsLocationsProductsAuthConfigsCreate(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest) (*operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/authConfigs", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaAuthConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaAuthConfig = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsAuthConfigsList - Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
func (s *Projects) IntegrationsProjectsLocationsProductsAuthConfigsList(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsAuthConfigsListRequest) (*operations.IntegrationsProjectsLocationsProductsAuthConfigsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/authConfigs", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsProductsAuthConfigsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaListAuthConfigsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaListAuthConfigsResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsCertificatesCreate - Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
func (s *Projects) IntegrationsProjectsLocationsProductsCertificatesCreate(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsCertificatesCreateRequest) (*operations.IntegrationsProjectsLocationsProductsCertificatesCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/certificates", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsProductsCertificatesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaCertificate
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaCertificate = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsCertificatesList - List all the certificates that match the filter. Restrict to certificate of current client only.
func (s *Projects) IntegrationsProjectsLocationsProductsCertificatesList(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsCertificatesListRequest) (*operations.IntegrationsProjectsLocationsProductsCertificatesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/certificates", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsProductsCertificatesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaListCertificatesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaListCertificatesResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsCreateBundle - PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Create a bundle.
func (s *Projects) IntegrationsProjectsLocationsProductsCreateBundle(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsCreateBundleRequest) (*operations.IntegrationsProjectsLocationsProductsCreateBundleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}:createBundle", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsProductsCreateBundleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaCreateBundleResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaCreateBundleResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsArchiveBundle - PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Soft-deletes the bundle.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsArchiveBundle(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}:archiveBundle", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaArchiveBundleResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsExecute - Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsExecute(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}:execute", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancel - Cancellation of an execution
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancel(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}:cancel", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaCancelExecutionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaCancelExecutionResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsExecutionsList - Lists the status of the integration executions.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsExecutionsList(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/executions", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaListExecutionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaListExecutionsResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift - * Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}:lift", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaLiftSuspensionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaLiftSuspensionResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList - * Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/suspensions", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaListSuspensionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaListSuspensionsResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve - * Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}:resolve", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaResolveSuspensionResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsList - Lists the snapshots of a given integration executions. This RPC is not being used.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsList(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/executionsnapshots", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaListExecutionSnapshotsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaListExecutionSnapshotsResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsList - Returns the list of all integrations in the specified project.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsList(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsListRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/integrations", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaListIntegrationsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaListIntegrationsResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstats - Get execution stats
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstats(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}:monitorexecutionstats", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaMonitorExecutionStatsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaMonitorExecutionStatsResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsSchedule - Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsSchedule(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}:schedule", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsVersionsArchive - Soft-deletes the integration. Changes the status of the integration to ARCHIVED. If the integration being ARCHIVED is tagged as "HEAD", the tag is removed from this snapshot and set to the previous non-ARCHIVED snapshot. The PUBLISH_REQUESTED, DUE_FOR_DELETION tags are removed too. This RPC throws an exception if the version being archived is DRAFT, and if the `locked_by` user is not the same as the user performing the Archive. Audit fields updated include last_modified_timestamp, last_modified_by. Any existing lock is released when Archiving a integration. Currently, there is no unarchive mechanism.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsVersionsArchive(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}:archive", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaArchiveIntegrationVersionResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivate - Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivate(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}:deactivate", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaDeactivateIntegrationVersionResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsVersionsDownload - Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsVersionsDownload(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}:download", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundle - PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. RPC to get details of the Bundle
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundle(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}:getBundle", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaGetBundleResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaGetBundleResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsVersionsPublish - This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsVersionsPublish(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}:publish", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaPublishIntegrationVersionResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock - Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{integrationVersion}:takeoverEditLock", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundle - THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. RPC to update the Bundle
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundle(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}:updateBundle", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaUpdateBundleResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaUpdateBundleResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsVersionsUpload - Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsVersionsUpload(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/versions:upload", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationsVersionsValidate - Validates the given integration. If the id doesn't exist, a NotFoundException is thrown. If validation fails a CanonicalCodeException is thrown. If there was no failure an empty response is returned.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationsVersionsValidate(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}:validate", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaValidateIntegrationVersionResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate - Creates an IntegrationTemplateVersion.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/versions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsList - Returns the list of all IntegrationTemplateVersions in the specified project.
func (s *Projects) IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsList(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListRequest) (*operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/versions", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsProductsListTaskEntities - This is a UI only method and will be moved away. Returns a list of common tasks.
func (s *Projects) IntegrationsProjectsLocationsProductsListTaskEntities(ctx context.Context, request operations.IntegrationsProjectsLocationsProductsListTaskEntitiesRequest) (*operations.IntegrationsProjectsLocationsProductsListTaskEntitiesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}:listTaskEntities", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsProductsListTaskEntitiesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaListTaskEntitiesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaListTaskEntitiesResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsSfdcInstancesCreate - Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
func (s *Projects) IntegrationsProjectsLocationsSfdcInstancesCreate(ctx context.Context, request operations.IntegrationsProjectsLocationsSfdcInstancesCreateRequest) (*operations.IntegrationsProjectsLocationsSfdcInstancesCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/sfdcInstances", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsSfdcInstancesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaSfdcInstance
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaSfdcInstance = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsSfdcInstancesList - Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
func (s *Projects) IntegrationsProjectsLocationsSfdcInstancesList(ctx context.Context, request operations.IntegrationsProjectsLocationsSfdcInstancesListRequest) (*operations.IntegrationsProjectsLocationsSfdcInstancesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/sfdcInstances", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsSfdcInstancesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate - Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
func (s *Projects) IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate(ctx context.Context, request operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateRequest) (*operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/sfdcChannels", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaSfdcChannel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaSfdcChannel = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete - Deletes an sfdc channel.
func (s *Projects) IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete(ctx context.Context, request operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest) (*operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleProtobufEmpty = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGet - Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
func (s *Projects) IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGet(ctx context.Context, request operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest) (*operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaSfdcChannel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaSfdcChannel = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsList - Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
func (s *Projects) IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsList(ctx context.Context, request operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest) (*operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/sfdcChannels", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse = out
		}
	}

	return res, nil
}

// IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch - Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.
func (s *Projects) IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch(ctx context.Context, request operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest) (*operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}", request.PathParams)

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

	res := &operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudIntegrationsV1alphaSfdcChannel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudIntegrationsV1alphaSfdcChannel = out
		}
	}

	return res, nil
}
