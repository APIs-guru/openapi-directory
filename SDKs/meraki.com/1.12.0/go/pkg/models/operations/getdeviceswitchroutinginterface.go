package operations



type GetDeviceSwitchRoutingInterfacePathParams struct {
    InterfaceID string `pathParam:"style=simple,explode=false,name=interfaceId"`
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type GetDeviceSwitchRoutingInterfaceRequest struct {
    PathParams GetDeviceSwitchRoutingInterfacePathParams 
    
}

type GetDeviceSwitchRoutingInterfaceResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceSwitchRoutingInterface200ApplicationJSONObject map[string]interface{} 
    
}

