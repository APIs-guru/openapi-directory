package operations



type GetNetworkSmDevicePerformanceHistoryPathParams struct {
    DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSmDevicePerformanceHistoryQueryParams struct {
    EndingBefore *string `queryParam:"style=form,explode=true,name=endingBefore"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=startingAfter"`
    
}

type GetNetworkSmDevicePerformanceHistoryRequest struct {
    PathParams GetNetworkSmDevicePerformanceHistoryPathParams 
    QueryParams GetNetworkSmDevicePerformanceHistoryQueryParams 
    
}

type GetNetworkSmDevicePerformanceHistoryResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetNetworkSmDevicePerformanceHistory200ApplicationJSONObject map[string]interface{} 
    
}

