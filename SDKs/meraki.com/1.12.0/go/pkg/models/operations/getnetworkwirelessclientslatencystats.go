package operations



type GetNetworkWirelessClientsLatencyStatsPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}


type GetNetworkWirelessClientsLatencyStatsBandEnum string

const (
    GetNetworkWirelessClientsLatencyStatsBandEnumTwo4 GetNetworkWirelessClientsLatencyStatsBandEnum = "2.4"
GetNetworkWirelessClientsLatencyStatsBandEnumFive GetNetworkWirelessClientsLatencyStatsBandEnum = "5"
)


type GetNetworkWirelessClientsLatencyStatsQueryParams struct {
    ApTag *string `queryParam:"style=form,explode=true,name=apTag"`
    Band *GetNetworkWirelessClientsLatencyStatsBandEnum `queryParam:"style=form,explode=true,name=band"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Ssid *int64 `queryParam:"style=form,explode=true,name=ssid"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    Vlan *int64 `queryParam:"style=form,explode=true,name=vlan"`
    
}

type GetNetworkWirelessClientsLatencyStatsRequest struct {
    PathParams GetNetworkWirelessClientsLatencyStatsPathParams 
    QueryParams GetNetworkWirelessClientsLatencyStatsQueryParams 
    
}

type GetNetworkWirelessClientsLatencyStatsResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkWirelessClientsLatencyStats200ApplicationJSONObject map[string]interface{} 
    
}

