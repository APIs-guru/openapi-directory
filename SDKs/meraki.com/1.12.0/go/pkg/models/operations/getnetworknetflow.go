package operations



type GetNetworkNetflowPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkNetflowRequest struct {
    PathParams GetNetworkNetflowPathParams 
    
}

type GetNetworkNetflowResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkNetflow200ApplicationJSONObject map[string]interface{} 
    
}

