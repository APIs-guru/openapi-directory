package operations



type GetNetworkApplianceVpnBgpPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkApplianceVpnBgpRequest struct {
    PathParams GetNetworkApplianceVpnBgpPathParams 
    
}

type GetNetworkApplianceVpnBgpResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkApplianceVpnBgp200ApplicationJSONObject map[string]interface{} 
    
}

