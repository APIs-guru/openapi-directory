package operations



type DeleteNetworkSwitchStackRoutingStaticRoutePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    StaticRouteID string `pathParam:"style=simple,explode=false,name=staticRouteId"`
    SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
    
}

type DeleteNetworkSwitchStackRoutingStaticRouteRequest struct {
    PathParams DeleteNetworkSwitchStackRoutingStaticRoutePathParams 
    
}

type DeleteNetworkSwitchStackRoutingStaticRouteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

