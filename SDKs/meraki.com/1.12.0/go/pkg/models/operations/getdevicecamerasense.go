package operations



type GetDeviceCameraSensePathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type GetDeviceCameraSenseRequest struct {
    PathParams GetDeviceCameraSensePathParams 
    
}

type GetDeviceCameraSenseResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceCameraSense200ApplicationJSONObject map[string]interface{} 
    
}

