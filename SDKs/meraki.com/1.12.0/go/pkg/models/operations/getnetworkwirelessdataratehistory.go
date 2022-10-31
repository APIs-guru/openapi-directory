package operations



type GetNetworkWirelessDataRateHistoryPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}


type GetNetworkWirelessDataRateHistoryBandEnum string

const (
    GetNetworkWirelessDataRateHistoryBandEnumTwo4 GetNetworkWirelessDataRateHistoryBandEnum = "2.4"
GetNetworkWirelessDataRateHistoryBandEnumFive GetNetworkWirelessDataRateHistoryBandEnum = "5"
)


type GetNetworkWirelessDataRateHistoryQueryParams struct {
    ApTag *string `queryParam:"style=form,explode=true,name=apTag"`
    AutoResolution *bool `queryParam:"style=form,explode=true,name=autoResolution"`
    Band *GetNetworkWirelessDataRateHistoryBandEnum `queryParam:"style=form,explode=true,name=band"`
    ClientID *string `queryParam:"style=form,explode=true,name=clientId"`
    DeviceSerial *string `queryParam:"style=form,explode=true,name=deviceSerial"`
    Resolution *int64 `queryParam:"style=form,explode=true,name=resolution"`
    Ssid *int64 `queryParam:"style=form,explode=true,name=ssid"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    
}

type GetNetworkWirelessDataRateHistoryRequest struct {
    PathParams GetNetworkWirelessDataRateHistoryPathParams 
    QueryParams GetNetworkWirelessDataRateHistoryQueryParams 
    
}

type GetNetworkWirelessDataRateHistoryResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkWirelessDataRateHistory200ApplicationJSONObject map[string]interface{} 
    
}

