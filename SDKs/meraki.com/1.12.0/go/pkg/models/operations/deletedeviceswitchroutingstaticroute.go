package operations



type DeleteDeviceSwitchRoutingStaticRoutePathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    StaticRouteID string `pathParam:"style=simple,explode=false,name=staticRouteId"`
    
}

type DeleteDeviceSwitchRoutingStaticRouteRequest struct {
    PathParams DeleteDeviceSwitchRoutingStaticRoutePathParams 
    
}

type DeleteDeviceSwitchRoutingStaticRouteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

