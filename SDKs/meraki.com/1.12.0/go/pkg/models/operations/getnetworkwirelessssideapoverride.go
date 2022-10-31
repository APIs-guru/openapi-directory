package operations



type GetNetworkWirelessSsidEapOverridePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    Number string `pathParam:"style=simple,explode=false,name=number"`
    
}

type GetNetworkWirelessSsidEapOverrideRequest struct {
    PathParams GetNetworkWirelessSsidEapOverridePathParams 
    
}

type GetNetworkWirelessSsidEapOverrideResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkWirelessSsidEapOverride200ApplicationJSONObject map[string]interface{} 
    
}

