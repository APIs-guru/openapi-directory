package operations



type GetNetworkWirelessSsidSchedulesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    Number string `pathParam:"style=simple,explode=false,name=number"`
    
}

type GetNetworkWirelessSsidSchedulesRequest struct {
    PathParams GetNetworkWirelessSsidSchedulesPathParams 
    
}

type GetNetworkWirelessSsidSchedulesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkWirelessSsidSchedules200ApplicationJSONObject map[string]interface{} 
    
}

