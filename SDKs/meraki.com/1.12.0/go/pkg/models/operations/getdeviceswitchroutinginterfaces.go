package operations



type GetDeviceSwitchRoutingInterfacesPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type GetDeviceSwitchRoutingInterfacesRequest struct {
    PathParams GetDeviceSwitchRoutingInterfacesPathParams 
    
}

type GetDeviceSwitchRoutingInterfacesResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceSwitchRoutingInterfaces200ApplicationJSONObject map[string]interface{} 
    
}

