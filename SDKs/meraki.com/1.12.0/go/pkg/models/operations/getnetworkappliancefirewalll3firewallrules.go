package operations



type GetNetworkApplianceFirewallL3FirewallRulesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkApplianceFirewallL3FirewallRulesRequest struct {
    PathParams GetNetworkApplianceFirewallL3FirewallRulesPathParams 
    
}

type GetNetworkApplianceFirewallL3FirewallRulesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject map[string]interface{} 
    
}

