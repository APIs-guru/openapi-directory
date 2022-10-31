package operations



type GetNetworkWirelessAirMarshalPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkWirelessAirMarshalQueryParams struct {
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    
}

type GetNetworkWirelessAirMarshalRequest struct {
    PathParams GetNetworkWirelessAirMarshalPathParams 
    QueryParams GetNetworkWirelessAirMarshalQueryParams 
    
}

type GetNetworkWirelessAirMarshalResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkWirelessAirMarshal200ApplicationJSONObject map[string]interface{} 
    
}

