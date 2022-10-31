package operations



type GetDeviceLossAndLatencyHistoryPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}


type GetDeviceLossAndLatencyHistoryUplinkEnum string

const (
    GetDeviceLossAndLatencyHistoryUplinkEnumWan1 GetDeviceLossAndLatencyHistoryUplinkEnum = "wan1"
GetDeviceLossAndLatencyHistoryUplinkEnumWan2 GetDeviceLossAndLatencyHistoryUplinkEnum = "wan2"
GetDeviceLossAndLatencyHistoryUplinkEnumCellular GetDeviceLossAndLatencyHistoryUplinkEnum = "cellular"
)


type GetDeviceLossAndLatencyHistoryQueryParams struct {
    IP string `queryParam:"style=form,explode=true,name=ip"`
    Resolution *int64 `queryParam:"style=form,explode=true,name=resolution"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    Uplink *GetDeviceLossAndLatencyHistoryUplinkEnum `queryParam:"style=form,explode=true,name=uplink"`
    
}

type GetDeviceLossAndLatencyHistoryRequest struct {
    PathParams GetDeviceLossAndLatencyHistoryPathParams 
    QueryParams GetDeviceLossAndLatencyHistoryQueryParams 
    
}

type GetDeviceLossAndLatencyHistoryResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceLossAndLatencyHistory200ApplicationJSONObject map[string]interface{} 
    
}

