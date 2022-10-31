package operations



type GetNetworkSwitchPortSchedulesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSwitchPortSchedulesRequest struct {
    PathParams GetNetworkSwitchPortSchedulesPathParams 
    
}

type GetNetworkSwitchPortSchedulesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSwitchPortSchedules200ApplicationJSONObject map[string]interface{} 
    
}

