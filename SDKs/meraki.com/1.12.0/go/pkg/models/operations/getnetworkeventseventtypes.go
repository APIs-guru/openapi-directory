package operations



type GetNetworkEventsEventTypesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkEventsEventTypesRequest struct {
    PathParams GetNetworkEventsEventTypesPathParams 
    
}

type GetNetworkEventsEventTypesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkEventsEventTypes200ApplicationJSONObject map[string]interface{} 
    
}

