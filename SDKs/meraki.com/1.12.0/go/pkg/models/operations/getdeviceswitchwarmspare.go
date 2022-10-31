package operations



type GetDeviceSwitchWarmSparePathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type GetDeviceSwitchWarmSpareRequest struct {
    PathParams GetDeviceSwitchWarmSparePathParams 
    
}

type GetDeviceSwitchWarmSpareResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceSwitchWarmSpare200ApplicationJSONObject map[string]interface{} 
    
}

