package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Routing struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewRouting(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Routing {
	return &Routing{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateDeviceSwitchRoutingInterface - Create a layer 3 interface for a switch
// Create a layer 3 interface for a switch
func (s *Routing) CreateDeviceSwitchRoutingInterface(ctx context.Context, request operations.CreateDeviceSwitchRoutingInterfaceRequest) (*operations.CreateDeviceSwitchRoutingInterfaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/switch/routing/interfaces", request.PathParams)

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

	res := &operations.CreateDeviceSwitchRoutingInterfaceResponse{
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

			res.CreateDeviceSwitchRoutingInterface201ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CreateDeviceSwitchRoutingStaticRoute - Create a layer 3 static route for a switch
// Create a layer 3 static route for a switch
func (s *Routing) CreateDeviceSwitchRoutingStaticRoute(ctx context.Context, request operations.CreateDeviceSwitchRoutingStaticRouteRequest) (*operations.CreateDeviceSwitchRoutingStaticRouteResponse, error) {
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

// CreateNetworkSwitchRoutingMulticastRendezvousPoint - Create a multicast rendezvous point
// Create a multicast rendezvous point
func (s *Routing) CreateNetworkSwitchRoutingMulticastRendezvousPoint(ctx context.Context, request operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest) (*operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints", request.PathParams)

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

	res := &operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse{
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

			res.CreateNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CreateNetworkSwitchStackRoutingInterface - Create a layer 3 interface for a switch stack
// Create a layer 3 interface for a switch stack
func (s *Routing) CreateNetworkSwitchStackRoutingInterface(ctx context.Context, request operations.CreateNetworkSwitchStackRoutingInterfaceRequest) (*operations.CreateNetworkSwitchStackRoutingInterfaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces", request.PathParams)

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

	res := &operations.CreateNetworkSwitchStackRoutingInterfaceResponse{
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

			res.CreateNetworkSwitchStackRoutingInterface201ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CreateNetworkSwitchStackRoutingStaticRoute - Create a layer 3 static route for a switch stack
// Create a layer 3 static route for a switch stack
func (s *Routing) CreateNetworkSwitchStackRoutingStaticRoute(ctx context.Context, request operations.CreateNetworkSwitchStackRoutingStaticRouteRequest) (*operations.CreateNetworkSwitchStackRoutingStaticRouteResponse, error) {
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

// DeleteDeviceSwitchRoutingInterface - Delete a layer 3 interface from the switch
// Delete a layer 3 interface from the switch
func (s *Routing) DeleteDeviceSwitchRoutingInterface(ctx context.Context, request operations.DeleteDeviceSwitchRoutingInterfaceRequest) (*operations.DeleteDeviceSwitchRoutingInterfaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", request.PathParams)

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

	res := &operations.DeleteDeviceSwitchRoutingInterfaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteDeviceSwitchRoutingStaticRoute - Delete a layer 3 static route for a switch
// Delete a layer 3 static route for a switch
func (s *Routing) DeleteDeviceSwitchRoutingStaticRoute(ctx context.Context, request operations.DeleteDeviceSwitchRoutingStaticRouteRequest) (*operations.DeleteDeviceSwitchRoutingStaticRouteResponse, error) {
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

// DeleteNetworkSwitchRoutingMulticastRendezvousPoint - Delete a multicast rendezvous point
// Delete a multicast rendezvous point
func (s *Routing) DeleteNetworkSwitchRoutingMulticastRendezvousPoint(ctx context.Context, request operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest) (*operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.PathParams)

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

	res := &operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteNetworkSwitchStackRoutingInterface - Delete a layer 3 interface from a switch stack
// Delete a layer 3 interface from a switch stack
func (s *Routing) DeleteNetworkSwitchStackRoutingInterface(ctx context.Context, request operations.DeleteNetworkSwitchStackRoutingInterfaceRequest) (*operations.DeleteNetworkSwitchStackRoutingInterfaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.PathParams)

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

	res := &operations.DeleteNetworkSwitchStackRoutingInterfaceResponse{
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
func (s *Routing) DeleteNetworkSwitchStackRoutingStaticRoute(ctx context.Context, request operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest) (*operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse, error) {
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

// GetDeviceSwitchRoutingInterface - Return a layer 3 interface for a switch
// Return a layer 3 interface for a switch
func (s *Routing) GetDeviceSwitchRoutingInterface(ctx context.Context, request operations.GetDeviceSwitchRoutingInterfaceRequest) (*operations.GetDeviceSwitchRoutingInterfaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", request.PathParams)

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

	res := &operations.GetDeviceSwitchRoutingInterfaceResponse{
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

			res.GetDeviceSwitchRoutingInterface200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetDeviceSwitchRoutingInterfaceDhcp - Return a layer 3 interface DHCP configuration for a switch
// Return a layer 3 interface DHCP configuration for a switch
func (s *Routing) GetDeviceSwitchRoutingInterfaceDhcp(ctx context.Context, request operations.GetDeviceSwitchRoutingInterfaceDhcpRequest) (*operations.GetDeviceSwitchRoutingInterfaceDhcpResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp", request.PathParams)

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

	res := &operations.GetDeviceSwitchRoutingInterfaceDhcpResponse{
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

			res.GetDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetDeviceSwitchRoutingInterfaces - List layer 3 interfaces for a switch
// List layer 3 interfaces for a switch
func (s *Routing) GetDeviceSwitchRoutingInterfaces(ctx context.Context, request operations.GetDeviceSwitchRoutingInterfacesRequest) (*operations.GetDeviceSwitchRoutingInterfacesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/switch/routing/interfaces", request.PathParams)

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

	res := &operations.GetDeviceSwitchRoutingInterfacesResponse{
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

			res.GetDeviceSwitchRoutingInterfaces200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetDeviceSwitchRoutingStaticRoute - Return a layer 3 static route for a switch
// Return a layer 3 static route for a switch
func (s *Routing) GetDeviceSwitchRoutingStaticRoute(ctx context.Context, request operations.GetDeviceSwitchRoutingStaticRouteRequest) (*operations.GetDeviceSwitchRoutingStaticRouteResponse, error) {
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
func (s *Routing) GetDeviceSwitchRoutingStaticRoutes(ctx context.Context, request operations.GetDeviceSwitchRoutingStaticRoutesRequest) (*operations.GetDeviceSwitchRoutingStaticRoutesResponse, error) {
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

// GetNetworkSwitchRoutingMulticast - Return multicast settings for a network
// Return multicast settings for a network
func (s *Routing) GetNetworkSwitchRoutingMulticast(ctx context.Context, request operations.GetNetworkSwitchRoutingMulticastRequest) (*operations.GetNetworkSwitchRoutingMulticastResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/routing/multicast", request.PathParams)

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

	res := &operations.GetNetworkSwitchRoutingMulticastResponse{
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

			res.GetNetworkSwitchRoutingMulticast200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkSwitchRoutingMulticastRendezvousPoint - Return a multicast rendezvous point
// Return a multicast rendezvous point
func (s *Routing) GetNetworkSwitchRoutingMulticastRendezvousPoint(ctx context.Context, request operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest) (*operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.PathParams)

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

	res := &operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse{
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

			res.GetNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkSwitchRoutingMulticastRendezvousPoints - List multicast rendezvous points
// List multicast rendezvous points
func (s *Routing) GetNetworkSwitchRoutingMulticastRendezvousPoints(ctx context.Context, request operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest) (*operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints", request.PathParams)

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

	res := &operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse{
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

			res.GetNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkSwitchRoutingOspf - Return layer 3 OSPF routing configuration
// Return layer 3 OSPF routing configuration
func (s *Routing) GetNetworkSwitchRoutingOspf(ctx context.Context, request operations.GetNetworkSwitchRoutingOspfRequest) (*operations.GetNetworkSwitchRoutingOspfResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/routing/ospf", request.PathParams)

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

	res := &operations.GetNetworkSwitchRoutingOspfResponse{
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

			res.GetNetworkSwitchRoutingOspf200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkSwitchStackRoutingInterface - Return a layer 3 interface from a switch stack
// Return a layer 3 interface from a switch stack
func (s *Routing) GetNetworkSwitchStackRoutingInterface(ctx context.Context, request operations.GetNetworkSwitchStackRoutingInterfaceRequest) (*operations.GetNetworkSwitchStackRoutingInterfaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.PathParams)

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

	res := &operations.GetNetworkSwitchStackRoutingInterfaceResponse{
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

			res.GetNetworkSwitchStackRoutingInterface200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkSwitchStackRoutingInterfaceDhcp - Return a layer 3 interface DHCP configuration for a switch stack
// Return a layer 3 interface DHCP configuration for a switch stack
func (s *Routing) GetNetworkSwitchStackRoutingInterfaceDhcp(ctx context.Context, request operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest) (*operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp", request.PathParams)

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

	res := &operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse{
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

			res.GetNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkSwitchStackRoutingInterfaces - List layer 3 interfaces for a switch stack
// List layer 3 interfaces for a switch stack
func (s *Routing) GetNetworkSwitchStackRoutingInterfaces(ctx context.Context, request operations.GetNetworkSwitchStackRoutingInterfacesRequest) (*operations.GetNetworkSwitchStackRoutingInterfacesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces", request.PathParams)

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

	res := &operations.GetNetworkSwitchStackRoutingInterfacesResponse{
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

			res.GetNetworkSwitchStackRoutingInterfaces200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkSwitchStackRoutingStaticRoute - Return a layer 3 static route for a switch stack
// Return a layer 3 static route for a switch stack
func (s *Routing) GetNetworkSwitchStackRoutingStaticRoute(ctx context.Context, request operations.GetNetworkSwitchStackRoutingStaticRouteRequest) (*operations.GetNetworkSwitchStackRoutingStaticRouteResponse, error) {
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
func (s *Routing) GetNetworkSwitchStackRoutingStaticRoutes(ctx context.Context, request operations.GetNetworkSwitchStackRoutingStaticRoutesRequest) (*operations.GetNetworkSwitchStackRoutingStaticRoutesResponse, error) {
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

// UpdateDeviceSwitchRoutingInterface - Update a layer 3 interface for a switch
// Update a layer 3 interface for a switch
func (s *Routing) UpdateDeviceSwitchRoutingInterface(ctx context.Context, request operations.UpdateDeviceSwitchRoutingInterfaceRequest) (*operations.UpdateDeviceSwitchRoutingInterfaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", request.PathParams)

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

	res := &operations.UpdateDeviceSwitchRoutingInterfaceResponse{
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

			res.UpdateDeviceSwitchRoutingInterface200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateDeviceSwitchRoutingInterfaceDhcp - Update a layer 3 interface DHCP configuration for a switch
// Update a layer 3 interface DHCP configuration for a switch
func (s *Routing) UpdateDeviceSwitchRoutingInterfaceDhcp(ctx context.Context, request operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest) (*operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp", request.PathParams)

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

	res := &operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse{
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

			res.UpdateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateDeviceSwitchRoutingStaticRoute - Update a layer 3 static route for a switch
// Update a layer 3 static route for a switch
func (s *Routing) UpdateDeviceSwitchRoutingStaticRoute(ctx context.Context, request operations.UpdateDeviceSwitchRoutingStaticRouteRequest) (*operations.UpdateDeviceSwitchRoutingStaticRouteResponse, error) {
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

// UpdateNetworkSwitchRoutingMulticast - Update multicast settings for a network
// Update multicast settings for a network
func (s *Routing) UpdateNetworkSwitchRoutingMulticast(ctx context.Context, request operations.UpdateNetworkSwitchRoutingMulticastRequest) (*operations.UpdateNetworkSwitchRoutingMulticastResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/routing/multicast", request.PathParams)

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

	res := &operations.UpdateNetworkSwitchRoutingMulticastResponse{
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

			res.UpdateNetworkSwitchRoutingMulticast200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkSwitchRoutingMulticastRendezvousPoint - Update a multicast rendezvous point
// Update a multicast rendezvous point
func (s *Routing) UpdateNetworkSwitchRoutingMulticastRendezvousPoint(ctx context.Context, request operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest) (*operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
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

	res := &operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse{
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

			res.UpdateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkSwitchRoutingOspf - Update layer 3 OSPF routing configuration
// Update layer 3 OSPF routing configuration
func (s *Routing) UpdateNetworkSwitchRoutingOspf(ctx context.Context, request operations.UpdateNetworkSwitchRoutingOspfRequest) (*operations.UpdateNetworkSwitchRoutingOspfResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/routing/ospf", request.PathParams)

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

	res := &operations.UpdateNetworkSwitchRoutingOspfResponse{
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

			res.UpdateNetworkSwitchRoutingOspf200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkSwitchStackRoutingInterface - Update a layer 3 interface for a switch stack
// Update a layer 3 interface for a switch stack
func (s *Routing) UpdateNetworkSwitchStackRoutingInterface(ctx context.Context, request operations.UpdateNetworkSwitchStackRoutingInterfaceRequest) (*operations.UpdateNetworkSwitchStackRoutingInterfaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.PathParams)

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

	res := &operations.UpdateNetworkSwitchStackRoutingInterfaceResponse{
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

			res.UpdateNetworkSwitchStackRoutingInterface200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkSwitchStackRoutingInterfaceDhcp - Update a layer 3 interface DHCP configuration for a switch stack
// Update a layer 3 interface DHCP configuration for a switch stack
func (s *Routing) UpdateNetworkSwitchStackRoutingInterfaceDhcp(ctx context.Context, request operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest) (*operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp", request.PathParams)

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

	res := &operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse{
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

			res.UpdateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkSwitchStackRoutingStaticRoute - Update a layer 3 static route for a switch stack
// Update a layer 3 static route for a switch stack
func (s *Routing) UpdateNetworkSwitchStackRoutingStaticRoute(ctx context.Context, request operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest) (*operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse, error) {
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
