package operations



type GetDeviceWirelessStatusPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type GetDeviceWirelessStatusRequest struct {
    PathParams GetDeviceWirelessStatusPathParams 
    
}

type GetDeviceWirelessStatusResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceWirelessStatus200ApplicationJSONObject map[string]interface{} 
    
}

