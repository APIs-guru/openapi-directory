package operations



type GetNetworkWirelessClientLatencyHistoryPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkWirelessClientLatencyHistoryQueryParams struct {
    Resolution *int64 `queryParam:"style=form,explode=true,name=resolution"`
    T0 *string `queryParam:"style=form,explode=true,name=t0"`
    T1 *string `queryParam:"style=form,explode=true,name=t1"`
    Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
    
}

type GetNetworkWirelessClientLatencyHistoryRequest struct {
    PathParams GetNetworkWirelessClientLatencyHistoryPathParams 
    QueryParams GetNetworkWirelessClientLatencyHistoryQueryParams 
    
}

type GetNetworkWirelessClientLatencyHistoryResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkWirelessClientLatencyHistory200ApplicationJSONObject map[string]interface{} 
    
}

