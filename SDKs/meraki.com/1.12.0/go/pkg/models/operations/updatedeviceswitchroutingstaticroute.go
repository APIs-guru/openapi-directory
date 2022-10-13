package operations

type UpdateDeviceSwitchRoutingStaticRoutePathParams struct {
	Serial        string `pathParam:"style=simple,explode=false,name=serial"`
	StaticRouteID string `pathParam:"style=simple,explode=false,name=staticRouteId"`
}

type UpdateDeviceSwitchRoutingStaticRouteRequestBody struct {
	AdvertiseViaOspfEnabled     *bool   `json:"advertiseViaOspfEnabled"`
	Name                        *string `json:"name"`
	NextHopIP                   *string `json:"nextHopIp"`
	PreferOverOspfRoutesEnabled *bool   `json:"preferOverOspfRoutesEnabled"`
	Subnet                      *string `json:"subnet"`
}

type UpdateDeviceSwitchRoutingStaticRouteRequest struct {
	PathParams UpdateDeviceSwitchRoutingStaticRoutePathParams
	Request    *UpdateDeviceSwitchRoutingStaticRouteRequestBody `request:"mediaType=application/json"`
}

type UpdateDeviceSwitchRoutingStaticRouteResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	UpdateDeviceSwitchRoutingStaticRoute200ApplicationJSONObject map[string]interface{}
}
