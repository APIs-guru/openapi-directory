package operations

type GetNetworkApplianceFirewallL7FirewallRulesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkApplianceFirewallL7FirewallRulesRequest struct {
	PathParams GetNetworkApplianceFirewallL7FirewallRulesPathParams
}

type GetNetworkApplianceFirewallL7FirewallRulesResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	GetNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject map[string]interface{}
}
