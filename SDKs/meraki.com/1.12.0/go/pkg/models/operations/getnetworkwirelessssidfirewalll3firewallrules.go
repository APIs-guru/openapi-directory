package operations

type GetNetworkWirelessSsidFirewallL3FirewallRulesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

type GetNetworkWirelessSsidFirewallL3FirewallRulesRequest struct {
	PathParams GetNetworkWirelessSsidFirewallL3FirewallRulesPathParams
}

type GetNetworkWirelessSsidFirewallL3FirewallRulesResponse struct {
	ContentType                                                           string
	StatusCode                                                            int64
	GetNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject map[string]interface{}
}
