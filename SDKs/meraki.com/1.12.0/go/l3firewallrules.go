package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type L3FirewallRules struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewL3FirewallRules(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *L3FirewallRules {
	return &L3FirewallRules{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetNetworkApplianceFirewallL3FirewallRules - Return the L3 firewall rules for an MX network
// Return the L3 firewall rules for an MX network
func (s *L3FirewallRules) GetNetworkApplianceFirewallL3FirewallRules(ctx context.Context, request operations.GetNetworkApplianceFirewallL3FirewallRulesRequest) (*operations.GetNetworkApplianceFirewallL3FirewallRulesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/firewall/l3FirewallRules", request.PathParams)

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

	res := &operations.GetNetworkApplianceFirewallL3FirewallRulesResponse{
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

			res.GetNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkWirelessSsidFirewallL3FirewallRules - Return the L3 firewall rules for an SSID on an MR network
// Return the L3 firewall rules for an SSID on an MR network
func (s *L3FirewallRules) GetNetworkWirelessSsidFirewallL3FirewallRules(ctx context.Context, request operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest) (*operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules", request.PathParams)

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

	res := &operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse{
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

			res.GetNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkApplianceFirewallL3FirewallRules - Update the L3 firewall rules of an MX network
// Update the L3 firewall rules of an MX network
func (s *L3FirewallRules) UpdateNetworkApplianceFirewallL3FirewallRules(ctx context.Context, request operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest) (*operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/firewall/l3FirewallRules", request.PathParams)

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

	res := &operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse{
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

			res.UpdateNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkWirelessSsidFirewallL3FirewallRules - Update the L3 firewall rules of an SSID on an MR network
// Update the L3 firewall rules of an SSID on an MR network
func (s *L3FirewallRules) UpdateNetworkWirelessSsidFirewallL3FirewallRules(ctx context.Context, request operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest) (*operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules", request.PathParams)

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

	res := &operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse{
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

			res.UpdateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject = out
		}
	}

	return res, nil
}
