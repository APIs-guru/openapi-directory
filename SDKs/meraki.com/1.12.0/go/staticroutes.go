package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type StaticRoutes struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewStaticRoutes(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *StaticRoutes {
	return &StaticRoutes{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateDeviceSwitchRoutingStaticRoute - Create a layer 3 static route for a switch
// Create a layer 3 static route for a switch
func (s *StaticRoutes) CreateDeviceSwitchRoutingStaticRoute(ctx context.Context, request operations.CreateDeviceSwitchRoutingStaticRouteRequest) (*operations.CreateDeviceSwitchRoutingStaticRouteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/switch/routing/staticRoutes", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateDeviceSwitchRoutingStaticRouteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateDeviceSwitchRoutingStaticRoute201ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CreateNetworkApplianceStaticRoute - Add a static route for an MX or teleworker network
// Add a static route for an MX or teleworker network
func (s *StaticRoutes) CreateNetworkApplianceStaticRoute(ctx context.Context, request operations.CreateNetworkApplianceStaticRouteRequest) (*operations.CreateNetworkApplianceStaticRouteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/staticRoutes", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateNetworkApplianceStaticRouteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateNetworkApplianceStaticRoute201ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CreateNetworkSwitchStackRoutingStaticRoute - Create a layer 3 static route for a switch stack
// Create a layer 3 static route for a switch stack
func (s *StaticRoutes) CreateNetworkSwitchStackRoutingStaticRoute(ctx context.Context, request operations.CreateNetworkSwitchStackRoutingStaticRouteRequest) (*operations.CreateNetworkSwitchStackRoutingStaticRouteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateNetworkSwitchStackRoutingStaticRouteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject = out
		}
	}

	return res, nil
}

// DeleteDeviceSwitchRoutingStaticRoute - Delete a layer 3 static route for a switch
// Delete a layer 3 static route for a switch
func (s *StaticRoutes) DeleteDeviceSwitchRoutingStaticRoute(ctx context.Context, request operations.DeleteDeviceSwitchRoutingStaticRouteRequest) (*operations.DeleteDeviceSwitchRoutingStaticRouteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteDeviceSwitchRoutingStaticRouteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteNetworkApplianceStaticRoute - Delete a static route from an MX or teleworker network
// Delete a static route from an MX or teleworker network
func (s *StaticRoutes) DeleteNetworkApplianceStaticRoute(ctx context.Context, request operations.DeleteNetworkApplianceStaticRouteRequest) (*operations.DeleteNetworkApplianceStaticRouteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteNetworkApplianceStaticRouteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteNetworkSwitchStackRoutingStaticRoute - Delete a layer 3 static route for a switch stack
// Delete a layer 3 static route for a switch stack
func (s *StaticRoutes) DeleteNetworkSwitchStackRoutingStaticRoute(ctx context.Context, request operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest) (*operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// GetDeviceSwitchRoutingStaticRoute - Return a layer 3 static route for a switch
// Return a layer 3 static route for a switch
func (s *StaticRoutes) GetDeviceSwitchRoutingStaticRoute(ctx context.Context, request operations.GetDeviceSwitchRoutingStaticRouteRequest) (*operations.GetDeviceSwitchRoutingStaticRouteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDeviceSwitchRoutingStaticRouteResponse{
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

			res.GetDeviceSwitchRoutingStaticRoute200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetDeviceSwitchRoutingStaticRoutes - List layer 3 static routes for a switch
// List layer 3 static routes for a switch
func (s *StaticRoutes) GetDeviceSwitchRoutingStaticRoutes(ctx context.Context, request operations.GetDeviceSwitchRoutingStaticRoutesRequest) (*operations.GetDeviceSwitchRoutingStaticRoutesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/switch/routing/staticRoutes", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDeviceSwitchRoutingStaticRoutesResponse{
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

			res.GetDeviceSwitchRoutingStaticRoutes200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkApplianceStaticRoute - Return a static route for an MX or teleworker network
// Return a static route for an MX or teleworker network
func (s *StaticRoutes) GetNetworkApplianceStaticRoute(ctx context.Context, request operations.GetNetworkApplianceStaticRouteRequest) (*operations.GetNetworkApplianceStaticRouteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetNetworkApplianceStaticRouteResponse{
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

			res.GetNetworkApplianceStaticRoute200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkApplianceStaticRoutes - List the static routes for an MX or teleworker network
// List the static routes for an MX or teleworker network
func (s *StaticRoutes) GetNetworkApplianceStaticRoutes(ctx context.Context, request operations.GetNetworkApplianceStaticRoutesRequest) (*operations.GetNetworkApplianceStaticRoutesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/staticRoutes", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetNetworkApplianceStaticRoutesResponse{
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

			res.GetNetworkApplianceStaticRoutes200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkSwitchStackRoutingStaticRoute - Return a layer 3 static route for a switch stack
// Return a layer 3 static route for a switch stack
func (s *StaticRoutes) GetNetworkSwitchStackRoutingStaticRoute(ctx context.Context, request operations.GetNetworkSwitchStackRoutingStaticRouteRequest) (*operations.GetNetworkSwitchStackRoutingStaticRouteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetNetworkSwitchStackRoutingStaticRouteResponse{
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

			res.GetNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkSwitchStackRoutingStaticRoutes - List layer 3 static routes for a switch stack
// List layer 3 static routes for a switch stack
func (s *StaticRoutes) GetNetworkSwitchStackRoutingStaticRoutes(ctx context.Context, request operations.GetNetworkSwitchStackRoutingStaticRoutesRequest) (*operations.GetNetworkSwitchStackRoutingStaticRoutesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetNetworkSwitchStackRoutingStaticRoutesResponse{
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

			res.GetNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateDeviceSwitchRoutingStaticRoute - Update a layer 3 static route for a switch
// Update a layer 3 static route for a switch
func (s *StaticRoutes) UpdateDeviceSwitchRoutingStaticRoute(ctx context.Context, request operations.UpdateDeviceSwitchRoutingStaticRouteRequest) (*operations.UpdateDeviceSwitchRoutingStaticRouteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateDeviceSwitchRoutingStaticRouteResponse{
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

			res.UpdateDeviceSwitchRoutingStaticRoute200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkApplianceStaticRoute - Update a static route for an MX or teleworker network
// Update a static route for an MX or teleworker network
func (s *StaticRoutes) UpdateNetworkApplianceStaticRoute(ctx context.Context, request operations.UpdateNetworkApplianceStaticRouteRequest) (*operations.UpdateNetworkApplianceStaticRouteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateNetworkApplianceStaticRouteResponse{
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

			res.UpdateNetworkApplianceStaticRoute200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkSwitchStackRoutingStaticRoute - Update a layer 3 static route for a switch stack
// Update a layer 3 static route for a switch stack
func (s *StaticRoutes) UpdateNetworkSwitchStackRoutingStaticRoute(ctx context.Context, request operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest) (*operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse{
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

			res.UpdateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject = out
		}
	}

	return res, nil
}
