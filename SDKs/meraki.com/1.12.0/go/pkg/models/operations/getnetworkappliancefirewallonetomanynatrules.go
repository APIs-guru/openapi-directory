package operations



type GetNetworkApplianceFirewallOneToManyNatRulesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkApplianceFirewallOneToManyNatRulesRequest struct {
    PathParams GetNetworkApplianceFirewallOneToManyNatRulesPathParams 
    
}

type GetNetworkApplianceFirewallOneToManyNatRulesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject map[string]interface{} 
    
}

