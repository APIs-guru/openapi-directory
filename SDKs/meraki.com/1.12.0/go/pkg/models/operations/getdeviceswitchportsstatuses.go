package operations



type GetDeviceSwitchPortsStatusesPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type GetDeviceSwitchPortsStatusesQueryParams struct {
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    
}

type GetDeviceSwitchPortsStatusesRequest struct {
    PathParams GetDeviceSwitchPortsStatusesPathParams 
    QueryParams GetDeviceSwitchPortsStatusesQueryParams 
    
}

type GetDeviceSwitchPortsStatusesResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceSwitchPortsStatuses200ApplicationJSONObject map[string]interface{} 
    
}

