package operations



type GetNetworkWirelessClientCountHistoryPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}


type GetNetworkWirelessClientCountHistoryBandEnum string

const (
    GetNetworkWirelessClientCountHistoryBandEnumTwo4 GetNetworkWirelessClientCountHistoryBandEnum = "2.4"
GetNetworkWirelessClientCountHistoryBandEnumFive GetNetworkWirelessClientCountHistoryBandEnum = "5"
)


type GetNetworkWirelessClientCountHistoryQueryParams struct {
    ApTag *string `queryParam:"style=form,explode=true,name=apTag"`
    AutoResolution *bool `queryParam:"style=form,explode=true,name=autoResolution"`
    Band *GetNetworkWirelessClientCountHistoryBandEnum `queryParam:"style=form,explode=true,name=band"`
    ClientID *string `queryParam:"style=form,explode=true,name=clientId"`
    DeviceSerial *string `queryParam:"style=form,explode=true,name=deviceSerial"`
    Resolution *int64 `queryParam:"style=form,explode=true,name=resolution"`
    Ssid *int64 `queryParam:"style=form,explode=true,name=ssid"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    
}

type GetNetworkWirelessClientCountHistoryRequest struct {
    PathParams GetNetworkWirelessClientCountHistoryPathParams 
    QueryParams GetNetworkWirelessClientCountHistoryQueryParams 
    
}

type GetNetworkWirelessClientCountHistoryResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkWirelessClientCountHistory200ApplicationJSONObject map[string]interface{} 
    
}

