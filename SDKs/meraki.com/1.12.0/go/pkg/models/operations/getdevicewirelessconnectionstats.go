package operations



type GetDeviceWirelessConnectionStatsPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}


type GetDeviceWirelessConnectionStatsBandEnum string

const (
    GetDeviceWirelessConnectionStatsBandEnumTwo4 GetDeviceWirelessConnectionStatsBandEnum = "2.4"
GetDeviceWirelessConnectionStatsBandEnumFive GetDeviceWirelessConnectionStatsBandEnum = "5"
)


type GetDeviceWirelessConnectionStatsQueryParams struct {
    ApTag *string `queryParam:"style=form,explode=true,name=apTag"`
    Band *GetDeviceWirelessConnectionStatsBandEnum `queryParam:"style=form,explode=true,name=band"`
    Ssid *int64 `queryParam:"style=form,explode=true,name=ssid"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    Vlan *int64 `queryParam:"style=form,explode=true,name=vlan"`
    
}

type GetDeviceWirelessConnectionStatsRequest struct {
    PathParams GetDeviceWirelessConnectionStatsPathParams 
    QueryParams GetDeviceWirelessConnectionStatsQueryParams 
    
}

type GetDeviceWirelessConnectionStatsResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceWirelessConnectionStats200ApplicationJSONObject map[string]interface{} 
    
}

