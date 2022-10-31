package operations



type RebootDevicePathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type RebootDeviceRequest struct {
    PathParams RebootDevicePathParams 
    
}

type RebootDeviceResponse struct {
    ContentType string 
    StatusCode int64 
    RebootDevice202ApplicationJSONObject map[string]interface{} 
    
}

