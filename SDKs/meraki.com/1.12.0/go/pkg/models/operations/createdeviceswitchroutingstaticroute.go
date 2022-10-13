package operations

type CreateDeviceSwitchRoutingStaticRoutePathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type CreateDeviceSwitchRoutingStaticRouteRequestBody struct {
	AdvertiseViaOspfEnabled     *bool   `json:"advertiseViaOspfEnabled"`
	Name                        *string `json:"name"`
	NextHopIP                   string  `json:"nextHopIp"`
	PreferOverOspfRoutesEnabled *bool   `json:"preferOverOspfRoutesEnabled"`
	Subnet                      string  `json:"subnet"`
}

type CreateDeviceSwitchRoutingStaticRouteRequest struct {
	PathParams CreateDeviceSwitchRoutingStaticRoutePathParams
	Request    CreateDeviceSwitchRoutingStaticRouteRequestBody `request:"mediaType=application/json"`
}

type CreateDeviceSwitchRoutingStaticRouteResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	CreateDeviceSwitchRoutingStaticRoute201ApplicationJSONObject map[string]interface{}
}
