package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type LoadBalancers struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewLoadBalancers(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *LoadBalancers {
	return &LoadBalancers{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteLoadBalancersID - Delete a Load Balancer
// Deletes a Load Balancer.
func (s *LoadBalancers) DeleteLoadBalancersID(ctx context.Context, request operations.DeleteLoadBalancersIDRequest) (*operations.DeleteLoadBalancersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteLoadBalancersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// GetLoadBalancers - Get all Load Balancers
// Gets all existing Load Balancers that you have available.
func (s *LoadBalancers) GetLoadBalancers(ctx context.Context, request operations.GetLoadBalancersRequest) (*operations.GetLoadBalancersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/load_balancers"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetLoadBalancersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetLoadBalancers200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetLoadBalancers200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetLoadBalancersID - Get a Load Balancer
// Gets a specific Load Balancer object.
func (s *LoadBalancers) GetLoadBalancersID(ctx context.Context, request operations.GetLoadBalancersIDRequest) (*operations.GetLoadBalancersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetLoadBalancersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetLoadBalancersID200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetLoadBalancersID200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetLoadBalancersIDMetrics - Get Metrics for a LoadBalancer
// You must specify the type of metric to get: `open_connections`, `connections_per_second`, `requests_per_second` or `bandwidth`. You can also specify more than one type by comma separation, e.g. `requests_per_second,bandwidth`.
//
// Depending on the type you will get different time series data:
//
// |Type | Timeseries | Unit | Description |
// |---- |------------|------|-------------|
// | open_connections | open_connections | number | Open connections |
// | connections_per_second | connections_per_second | connections/s | Connections per second |
// | requests_per_second | requests_per_second | requests/s | Requests per second |
// | bandwidth | bandwidth.in | bytes/s | Ingress bandwidth |
// || bandwidth.out | bytes/s | Egress bandwidth |
//
// Metrics are available for the last 30 days only.
//
// If you do not provide the step argument we will automatically adjust it so that 200 samples are returned.
//
// We limit the number of samples to a maximum of 500 and will adjust the step parameter accordingly.
func (s *LoadBalancers) GetLoadBalancersIDMetrics(ctx context.Context, request operations.GetLoadBalancersIDMetricsRequest) (*operations.GetLoadBalancersIDMetricsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}/metrics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetLoadBalancersIDMetricsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetLoadBalancersIDMetrics200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetLoadBalancersIDMetrics200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostLoadBalancers - Create a Load Balancer
// Creates a Load Balancer.
//
// #### Call specific error codes
//
// | Code                                    | Description                                                                                           |
// |-----------------------------------------|-------------------------------------------------------------------------------------------------------|
// | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
// | `ip_not_owned`                          | The IP is not owned by the owner of the project of the Load Balancer                                  |
// | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
// | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
// | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
// | `source_port_already_used`              | The source port you are trying to add is already in use                                               |
// | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
func (s *LoadBalancers) PostLoadBalancers(ctx context.Context, request operations.PostLoadBalancersRequest) (*operations.PostLoadBalancersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/load_balancers"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostLoadBalancersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostLoadBalancers201ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostLoadBalancers201ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PutLoadBalancersID - Update a Load Balancer
// Updates a Load Balancer. You can update a Load Balancer’s name and a Load Balancer’s labels.
//
// Note that when updating labels, the Load Balancer’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
//
// Note: if the Load Balancer object changes during the request, the response will be a “conflict” error.
func (s *LoadBalancers) PutLoadBalancersID(ctx context.Context, request operations.PutLoadBalancersIDRequest) (*operations.PutLoadBalancersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutLoadBalancersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PutLoadBalancersID200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PutLoadBalancersID200ApplicationJSONObject = out
		}
	}

	return res, nil
}
