package operations



type GetNetworkSwitchDhcpServerPolicyPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSwitchDhcpServerPolicyRequest struct {
    PathParams GetNetworkSwitchDhcpServerPolicyPathParams 
    
}

type GetNetworkSwitchDhcpServerPolicyResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSwitchDhcpServerPolicy200ApplicationJSONObject map[string]interface{} 
    
}

