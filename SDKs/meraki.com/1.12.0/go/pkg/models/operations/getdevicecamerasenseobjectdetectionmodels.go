package operations



type GetDeviceCameraSenseObjectDetectionModelsPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type GetDeviceCameraSenseObjectDetectionModelsRequest struct {
    PathParams GetDeviceCameraSenseObjectDetectionModelsPathParams 
    
}

type GetDeviceCameraSenseObjectDetectionModelsResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceCameraSenseObjectDetectionModels200ApplicationJSONObject map[string]interface{} 
    
}

