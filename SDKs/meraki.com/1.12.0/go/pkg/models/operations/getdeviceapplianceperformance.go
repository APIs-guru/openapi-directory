package operations



type GetDeviceAppliancePerformancePathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type GetDeviceAppliancePerformanceRequest struct {
    PathParams GetDeviceAppliancePerformancePathParams 
    
}

type GetDeviceAppliancePerformanceResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceAppliancePerformance200ApplicationJSONObject map[string]interface{} 
    
}

