package operations



type GetNetworkApplianceFirewallInboundFirewallRulesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkApplianceFirewallInboundFirewallRulesRequest struct {
    PathParams GetNetworkApplianceFirewallInboundFirewallRulesPathParams 
    
}

type GetNetworkApplianceFirewallInboundFirewallRulesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject map[string]interface{} 
    
}

