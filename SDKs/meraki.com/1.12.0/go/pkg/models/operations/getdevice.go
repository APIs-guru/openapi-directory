package operations



type GetDevicePathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type GetDeviceRequest struct {
    PathParams GetDevicePathParams 
    
}

type GetDeviceResponse struct {
    ContentType string 
    StatusCode int64 
    GetDevice200ApplicationJSONObject map[string]interface{} 
    
}

