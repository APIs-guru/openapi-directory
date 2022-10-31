package operations



type GetNetworkDevicesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkDevicesRequest struct {
    PathParams GetNetworkDevicesPathParams 
    
}

type GetNetworkDevicesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkDevices200ApplicationJSONObject map[string]interface{} 
    
}

