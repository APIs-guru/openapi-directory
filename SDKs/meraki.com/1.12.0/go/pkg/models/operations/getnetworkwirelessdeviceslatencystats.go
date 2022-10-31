package operations



type GetNetworkWirelessDevicesLatencyStatsPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}


type GetNetworkWirelessDevicesLatencyStatsBandEnum string

const (
    GetNetworkWirelessDevicesLatencyStatsBandEnumTwo4 GetNetworkWirelessDevicesLatencyStatsBandEnum = "2.4"
GetNetworkWirelessDevicesLatencyStatsBandEnumFive GetNetworkWirelessDevicesLatencyStatsBandEnum = "5"
)


type GetNetworkWirelessDevicesLatencyStatsQueryParams struct {
    ApTag *string `queryParam:"style=form,explode=true,name=apTag"`
    Band *GetNetworkWirelessDevicesLatencyStatsBandEnum `queryParam:"style=form,explode=true,name=band"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Ssid *int64 `queryParam:"style=form,explode=true,name=ssid"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    Vlan *int64 `queryParam:"style=form,explode=true,name=vlan"`
    
}

type GetNetworkWirelessDevicesLatencyStatsRequest struct {
    PathParams GetNetworkWirelessDevicesLatencyStatsPathParams 
    QueryParams GetNetworkWirelessDevicesLatencyStatsQueryParams 
    
}

type GetNetworkWirelessDevicesLatencyStatsResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkWirelessDevicesLatencyStats200ApplicationJSONObject map[string]interface{} 
    
}

