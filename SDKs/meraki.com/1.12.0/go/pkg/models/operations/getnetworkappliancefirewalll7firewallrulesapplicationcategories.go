package operations



type GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest struct {
    PathParams GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesPathParams 
    
}

type GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJSONObject map[string]interface{} 
    
}

