package operations



type GetDeviceManagementInterfacePathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type GetDeviceManagementInterfaceRequest struct {
    PathParams GetDeviceManagementInterfacePathParams 
    
}

type GetDeviceManagementInterfaceResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceManagementInterface200ApplicationJSONObject map[string]interface{} 
    
}

