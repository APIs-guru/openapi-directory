package operations



type GetNetworkClientPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkClientRequest struct {
    PathParams GetNetworkClientPathParams 
    
}

type GetNetworkClientResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkClient200ApplicationJSONObject map[string]interface{} 
    
}

