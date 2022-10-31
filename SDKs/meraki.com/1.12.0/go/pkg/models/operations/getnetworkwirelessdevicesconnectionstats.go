package operations



type GetNetworkWirelessDevicesConnectionStatsPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}


type GetNetworkWirelessDevicesConnectionStatsBandEnum string

const (
    GetNetworkWirelessDevicesConnectionStatsBandEnumTwo4 GetNetworkWirelessDevicesConnectionStatsBandEnum = "2.4"
GetNetworkWirelessDevicesConnectionStatsBandEnumFive GetNetworkWirelessDevicesConnectionStatsBandEnum = "5"
)


type GetNetworkWirelessDevicesConnectionStatsQueryParams struct {
    ApTag *string `queryParam:"style=form,explode=true,name=apTag"`
    Band *GetNetworkWirelessDevicesConnectionStatsBandEnum `queryParam:"style=form,explode=true,name=band"`
    Ssid *int64 `queryParam:"style=form,explode=true,name=ssid"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    Vlan *int64 `queryParam:"style=form,explode=true,name=vlan"`
    
}

type GetNetworkWirelessDevicesConnectionStatsRequest struct {
    PathParams GetNetworkWirelessDevicesConnectionStatsPathParams 
    QueryParams GetNetworkWirelessDevicesConnectionStatsQueryParams 
    
}

type GetNetworkWirelessDevicesConnectionStatsResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkWirelessDevicesConnectionStats200ApplicationJSONObject map[string]interface{} 
    
}

