package operations



type GetNetworkWirelessSsidHotspot20PathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    Number string `pathParam:"style=simple,explode=false,name=number"`
    
}

type GetNetworkWirelessSsidHotspot20Request struct {
    PathParams GetNetworkWirelessSsidHotspot20PathParams 
    
}

type GetNetworkWirelessSsidHotspot20Response struct {
    ContentType string 
    StatusCode int64 
    GetNetworkWirelessSsidHotspot20200ApplicationJSONObject map[string]interface{} 
    
}

