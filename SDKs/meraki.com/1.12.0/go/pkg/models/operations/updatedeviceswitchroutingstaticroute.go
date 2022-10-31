package operations



type UpdateDeviceSwitchRoutingStaticRoutePathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    StaticRouteID string `pathParam:"style=simple,explode=false,name=staticRouteId"`
    
}

type UpdateDeviceSwitchRoutingStaticRouteRequestBody struct {
    AdvertiseViaOspfEnabled *bool `json:"advertiseViaOspfEnabled,omitempty"`
    Name *string `json:"name,omitempty"`
    NextHopIP *string `json:"nextHopIp,omitempty"`
    PreferOverOspfRoutesEnabled *bool `json:"preferOverOspfRoutesEnabled,omitempty"`
    Subnet *string `json:"subnet,omitempty"`
    
}

type UpdateDeviceSwitchRoutingStaticRouteRequest struct {
    PathParams UpdateDeviceSwitchRoutingStaticRoutePathParams 
    Request *UpdateDeviceSwitchRoutingStaticRouteRequestBody `request:"mediaType=application/json"`
    
}

type UpdateDeviceSwitchRoutingStaticRouteResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateDeviceSwitchRoutingStaticRoute200ApplicationJSONObject map[string]interface{} 
    
}

