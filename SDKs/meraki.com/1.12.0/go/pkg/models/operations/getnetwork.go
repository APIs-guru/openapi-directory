package operations



type GetNetworkPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkRequest struct {
    PathParams GetNetworkPathParams 
    
}

type GetNetworkResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetwork200ApplicationJSONObject map[string]interface{} 
    
}

