package operations



type GetNetworkSwitchStpPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSwitchStpRequest struct {
    PathParams GetNetworkSwitchStpPathParams 
    
}

type GetNetworkSwitchStpResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSwitchStp200ApplicationJSONObject map[string]interface{} 
    
}

