package operations



type GetNetworkSwitchMtuPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSwitchMtuRequest struct {
    PathParams GetNetworkSwitchMtuPathParams 
    
}

type GetNetworkSwitchMtuResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSwitchMtu200ApplicationJSONObject map[string]interface{} 
    
}

