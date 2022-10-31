package operations



type GetNetworkApplianceFirewallOneToOneNatRulesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkApplianceFirewallOneToOneNatRulesRequest struct {
    PathParams GetNetworkApplianceFirewallOneToOneNatRulesPathParams 
    
}

type GetNetworkApplianceFirewallOneToOneNatRulesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject map[string]interface{} 
    
}

