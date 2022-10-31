package operations



type GetDeviceWirelessLatencyStatsPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}


type GetDeviceWirelessLatencyStatsBandEnum string

const (
    GetDeviceWirelessLatencyStatsBandEnumTwo4 GetDeviceWirelessLatencyStatsBandEnum = "2.4"
GetDeviceWirelessLatencyStatsBandEnumFive GetDeviceWirelessLatencyStatsBandEnum = "5"
)


type GetDeviceWirelessLatencyStatsQueryParams struct {
    ApTag *string `queryParam:"style=form,explode=true,name=apTag"`
    Band *GetDeviceWirelessLatencyStatsBandEnum `queryParam:"style=form,explode=true,name=band"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Ssid *int64 `queryParam:"style=form,explode=true,name=ssid"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    Vlan *int64 `queryParam:"style=form,explode=true,name=vlan"`
    
}

type GetDeviceWirelessLatencyStatsRequest struct {
    PathParams GetDeviceWirelessLatencyStatsPathParams 
    QueryParams GetDeviceWirelessLatencyStatsQueryParams 
    
}

type GetDeviceWirelessLatencyStatsResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceWirelessLatencyStats200ApplicationJSONObject map[string]interface{} 
    
}

