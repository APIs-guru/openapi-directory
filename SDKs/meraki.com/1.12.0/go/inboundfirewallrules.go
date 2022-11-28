package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type InboundFirewallRules struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewInboundFirewallRules(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *InboundFirewallRules {
	return &InboundFirewallRules{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetNetworkApplianceFirewallInboundFirewallRules - Return the inbound firewall rules for an MX network
// Return the inbound firewall rules for an MX network
func (s *InboundFirewallRules) GetNetworkApplianceFirewallInboundFirewallRules(ctx context.Context, request operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest) (*operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/firewall/inboundFirewallRules", request.PathParams)

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

	res := &operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse{
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

			res.GetNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkApplianceFirewallInboundFirewallRules - Update the inbound firewall rules of an MX network
// Update the inbound firewall rules of an MX network
func (s *InboundFirewallRules) UpdateNetworkApplianceFirewallInboundFirewallRules(ctx context.Context, request operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest) (*operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/firewall/inboundFirewallRules", request.PathParams)

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

	res := &operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse{
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

			res.UpdateNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject = out
		}
	}

	return res, nil
}
