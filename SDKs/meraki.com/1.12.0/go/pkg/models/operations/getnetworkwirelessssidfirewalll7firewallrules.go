package operations

type GetNetworkWirelessSsidFirewallL7FirewallRulesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

type GetNetworkWirelessSsidFirewallL7FirewallRulesRequest struct {
	PathParams GetNetworkWirelessSsidFirewallL7FirewallRulesPathParams
}

type GetNetworkWirelessSsidFirewallL7FirewallRulesResponse struct {
	ContentType                                                           string
	StatusCode                                                            int64
	GetNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject map[string]interface{}
}
