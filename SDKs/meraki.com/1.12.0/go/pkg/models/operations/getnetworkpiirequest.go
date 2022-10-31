package operations



type GetNetworkPiiRequestPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    RequestID string `pathParam:"style=simple,explode=false,name=requestId"`
    
}

type GetNetworkPiiRequestRequest struct {
    PathParams GetNetworkPiiRequestPathParams 
    
}

type GetNetworkPiiRequestResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkPiiRequest200ApplicationJSONObject map[string]interface{} 
    
}

