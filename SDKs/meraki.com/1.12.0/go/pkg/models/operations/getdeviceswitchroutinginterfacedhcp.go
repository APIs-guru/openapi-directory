package operations



type GetDeviceSwitchRoutingInterfaceDhcpPathParams struct {
    InterfaceID string `pathParam:"style=simple,explode=false,name=interfaceId"`
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type GetDeviceSwitchRoutingInterfaceDhcpRequest struct {
    PathParams GetDeviceSwitchRoutingInterfaceDhcpPathParams 
    
}

type GetDeviceSwitchRoutingInterfaceDhcpResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject map[string]interface{} 
    
}

