package operations



type GetNetworkSwitchStackRoutingStaticRoutesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
    
}

type GetNetworkSwitchStackRoutingStaticRoutesRequest struct {
    PathParams GetNetworkSwitchStackRoutingStaticRoutesPathParams 
    
}

type GetNetworkSwitchStackRoutingStaticRoutesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObject map[string]interface{} 
    
}

