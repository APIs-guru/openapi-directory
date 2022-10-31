package operations



type GetDeviceSwitchRoutingStaticRoutePathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    StaticRouteID string `pathParam:"style=simple,explode=false,name=staticRouteId"`
    
}

type GetDeviceSwitchRoutingStaticRouteRequest struct {
    PathParams GetDeviceSwitchRoutingStaticRoutePathParams 
    
}

type GetDeviceSwitchRoutingStaticRouteResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceSwitchRoutingStaticRoute200ApplicationJSONObject map[string]interface{} 
    
}

