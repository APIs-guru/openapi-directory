package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type CellularGateway struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCellularGateway(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CellularGateway {
	return &CellularGateway{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetDeviceCellularGatewayLan - Show the LAN Settings of a MG
// Show the LAN Settings of a MG
func (s *CellularGateway) GetDeviceCellularGatewayLan(ctx context.Context, request operations.GetDeviceCellularGatewayLanRequest) (*operations.GetDeviceCellularGatewayLanResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/cellularGateway/lan", request.PathParams)

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

	res := &operations.GetDeviceCellularGatewayLanResponse{
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

			res.GetDeviceCellularGatewayLan200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetDeviceCellularGatewayPortForwardingRules - Returns the port forwarding rules for a single MG.
// Returns the port forwarding rules for a single MG.
func (s *CellularGateway) GetDeviceCellularGatewayPortForwardingRules(ctx context.Context, request operations.GetDeviceCellularGatewayPortForwardingRulesRequest) (*operations.GetDeviceCellularGatewayPortForwardingRulesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/cellularGateway/portForwardingRules", request.PathParams)

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

	res := &operations.GetDeviceCellularGatewayPortForwardingRulesResponse{
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

			res.GetDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkCellularGatewayConnectivityMonitoringDestinations - Return the connectivity testing destinations for an MG network
// Return the connectivity testing destinations for an MG network
func (s *CellularGateway) GetNetworkCellularGatewayConnectivityMonitoringDestinations(ctx context.Context, request operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest) (*operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/cellularGateway/connectivityMonitoringDestinations", request.PathParams)

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

	res := &operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse{
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

			res.GetNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkCellularGatewayDhcp - List common DHCP settings of MGs
// List common DHCP settings of MGs
func (s *CellularGateway) GetNetworkCellularGatewayDhcp(ctx context.Context, request operations.GetNetworkCellularGatewayDhcpRequest) (*operations.GetNetworkCellularGatewayDhcpResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/cellularGateway/dhcp", request.PathParams)

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

	res := &operations.GetNetworkCellularGatewayDhcpResponse{
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

			res.GetNetworkCellularGatewayDhcp200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkCellularGatewaySubnetPool - Return the subnet pool and mask configured for MGs in the network.
// Return the subnet pool and mask configured for MGs in the network.
func (s *CellularGateway) GetNetworkCellularGatewaySubnetPool(ctx context.Context, request operations.GetNetworkCellularGatewaySubnetPoolRequest) (*operations.GetNetworkCellularGatewaySubnetPoolResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/cellularGateway/subnetPool", request.PathParams)

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

	res := &operations.GetNetworkCellularGatewaySubnetPoolResponse{
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

			res.GetNetworkCellularGatewaySubnetPool200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkCellularGatewayUplink - Returns the uplink settings for your MG network.
// Returns the uplink settings for your MG network.
func (s *CellularGateway) GetNetworkCellularGatewayUplink(ctx context.Context, request operations.GetNetworkCellularGatewayUplinkRequest) (*operations.GetNetworkCellularGatewayUplinkResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/cellularGateway/uplink", request.PathParams)

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

	res := &operations.GetNetworkCellularGatewayUplinkResponse{
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

			res.GetNetworkCellularGatewayUplink200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetOrganizationCellularGatewayUplinkStatuses - List the uplink status of every Meraki MG cellular gateway in the organization
// List the uplink status of every Meraki MG cellular gateway in the organization
func (s *CellularGateway) GetOrganizationCellularGatewayUplinkStatuses(ctx context.Context, request operations.GetOrganizationCellularGatewayUplinkStatusesRequest) (*operations.GetOrganizationCellularGatewayUplinkStatusesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/cellularGateway/uplink/statuses", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetOrganizationCellularGatewayUplinkStatusesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateDeviceCellularGatewayLan - Update the LAN Settings for a single MG.
// Update the LAN Settings for a single MG.
func (s *CellularGateway) UpdateDeviceCellularGatewayLan(ctx context.Context, request operations.UpdateDeviceCellularGatewayLanRequest) (*operations.UpdateDeviceCellularGatewayLanResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/cellularGateway/lan", request.PathParams)

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

	res := &operations.UpdateDeviceCellularGatewayLanResponse{
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

			res.UpdateDeviceCellularGatewayLan200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateDeviceCellularGatewayPortForwardingRules - Updates the port forwarding rules for a single MG.
// Updates the port forwarding rules for a single MG.
func (s *CellularGateway) UpdateDeviceCellularGatewayPortForwardingRules(ctx context.Context, request operations.UpdateDeviceCellularGatewayPortForwardingRulesRequest) (*operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/cellularGateway/portForwardingRules", request.PathParams)

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

	res := &operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse{
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

			res.UpdateDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkCellularGatewayConnectivityMonitoringDestinations - Update the connectivity testing destinations for an MG network
// Update the connectivity testing destinations for an MG network
func (s *CellularGateway) UpdateNetworkCellularGatewayConnectivityMonitoringDestinations(ctx context.Context, request operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest) (*operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/cellularGateway/connectivityMonitoringDestinations", request.PathParams)

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

	res := &operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse{
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

			res.UpdateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkCellularGatewayDhcp - Update common DHCP settings of MGs
// Update common DHCP settings of MGs
func (s *CellularGateway) UpdateNetworkCellularGatewayDhcp(ctx context.Context, request operations.UpdateNetworkCellularGatewayDhcpRequest) (*operations.UpdateNetworkCellularGatewayDhcpResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/cellularGateway/dhcp", request.PathParams)

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

	res := &operations.UpdateNetworkCellularGatewayDhcpResponse{
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

			res.UpdateNetworkCellularGatewayDhcp200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkCellularGatewaySubnetPool - Update the subnet pool and mask configuration for MGs in the network.
// Update the subnet pool and mask configuration for MGs in the network.
func (s *CellularGateway) UpdateNetworkCellularGatewaySubnetPool(ctx context.Context, request operations.UpdateNetworkCellularGatewaySubnetPoolRequest) (*operations.UpdateNetworkCellularGatewaySubnetPoolResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/cellularGateway/subnetPool", request.PathParams)

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

	res := &operations.UpdateNetworkCellularGatewaySubnetPoolResponse{
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

			res.UpdateNetworkCellularGatewaySubnetPool200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkCellularGatewayUplink - Updates the uplink settings for your MG network.
// Updates the uplink settings for your MG network.
func (s *CellularGateway) UpdateNetworkCellularGatewayUplink(ctx context.Context, request operations.UpdateNetworkCellularGatewayUplinkRequest) (*operations.UpdateNetworkCellularGatewayUplinkResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/cellularGateway/uplink", request.PathParams)

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

	res := &operations.UpdateNetworkCellularGatewayUplinkResponse{
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

			res.UpdateNetworkCellularGatewayUplink200ApplicationJSONObject = out
		}
	}

	return res, nil
}
