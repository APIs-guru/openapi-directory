package operations



type GetNetworkSwitchStackRoutingInterfacePathParams struct {
    InterfaceID string `pathParam:"style=simple,explode=false,name=interfaceId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
    
}

type GetNetworkSwitchStackRoutingInterfaceRequest struct {
    PathParams GetNetworkSwitchStackRoutingInterfacePathParams 
    
}

type GetNetworkSwitchStackRoutingInterfaceResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSwitchStackRoutingInterface200ApplicationJSONObject map[string]interface{} 
    
}

