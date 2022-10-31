package operations



type GetNetworkApplianceFirewallFirewalledServicePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    Service string `pathParam:"style=simple,explode=false,name=service"`
    
}

type GetNetworkApplianceFirewallFirewalledServiceRequest struct {
    PathParams GetNetworkApplianceFirewallFirewalledServicePathParams 
    
}

type GetNetworkApplianceFirewallFirewalledServiceResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkApplianceFirewallFirewalledService200ApplicationJSONObject map[string]interface{} 
    
}

