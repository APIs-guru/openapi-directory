package operations



type GetNetworkApplianceFirewallPortForwardingRulesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkApplianceFirewallPortForwardingRulesRequest struct {
    PathParams GetNetworkApplianceFirewallPortForwardingRulesPathParams 
    
}

type GetNetworkApplianceFirewallPortForwardingRulesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject map[string]interface{} 
    
}

