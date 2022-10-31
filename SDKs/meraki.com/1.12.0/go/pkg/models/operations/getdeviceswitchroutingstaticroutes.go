package operations



type GetDeviceSwitchRoutingStaticRoutesPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type GetDeviceSwitchRoutingStaticRoutesRequest struct {
    PathParams GetDeviceSwitchRoutingStaticRoutesPathParams 
    
}

type GetDeviceSwitchRoutingStaticRoutesResponse struct {
    ContentType string 
    StatusCode int64 
    GetDeviceSwitchRoutingStaticRoutes200ApplicationJSONObject map[string]interface{} 
    
}

