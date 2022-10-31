package operations



type GetNetworkWirelessClientsConnectionStatsPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}


type GetNetworkWirelessClientsConnectionStatsBandEnum string

const (
    GetNetworkWirelessClientsConnectionStatsBandEnumTwo4 GetNetworkWirelessClientsConnectionStatsBandEnum = "2.4"
GetNetworkWirelessClientsConnectionStatsBandEnumFive GetNetworkWirelessClientsConnectionStatsBandEnum = "5"
)


type GetNetworkWirelessClientsConnectionStatsQueryParams struct {
    ApTag *string `queryParam:"style=form,explode=true,name=apTag"`
    Band *GetNetworkWirelessClientsConnectionStatsBandEnum `queryParam:"style=form,explode=true,name=band"`
    Ssid *int64 `queryParam:"style=form,explode=true,name=ssid"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    Vlan *int64 `queryParam:"style=form,explode=true,name=vlan"`
    
}

type GetNetworkWirelessClientsConnectionStatsRequest struct {
    PathParams GetNetworkWirelessClientsConnectionStatsPathParams 
    QueryParams GetNetworkWirelessClientsConnectionStatsQueryParams 
    
}

type GetNetworkWirelessClientsConnectionStatsResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkWirelessClientsConnectionStats200ApplicationJSONObject map[string]interface{} 
    
}

