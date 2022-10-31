package operations



type GetNetworkCameraSchedulesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkCameraSchedulesRequest struct {
    PathParams GetNetworkCameraSchedulesPathParams 
    
}

type GetNetworkCameraSchedulesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkCameraSchedules200ApplicationJSONObject map[string]interface{} 
    
}

