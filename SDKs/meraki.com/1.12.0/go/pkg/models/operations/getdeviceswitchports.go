package operations



type GetDeviceSwitchPortsPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type GetDeviceSwitchPortsRequest struct {
    PathParams GetDeviceSwitchPortsPathParams 
    
}

type GetDeviceSwitchPortsResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceSwitchPorts200ApplicationJSONObject map[string]interface{} 
    
}

