package operations



type GetNetworkApplianceFirewallFirewalledServicesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkApplianceFirewallFirewalledServicesRequest struct {
    PathParams GetNetworkApplianceFirewallFirewalledServicesPathParams 
    
}

type GetNetworkApplianceFirewallFirewalledServicesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkApplianceFirewallFirewalledServices200ApplicationJSONObject map[string]interface{} 
    
}

