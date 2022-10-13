package operations

type UpdateNetworkSwitchStackRoutingStaticRoutePathParams struct {
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	StaticRouteID string `pathParam:"style=simple,explode=false,name=staticRouteId"`
	SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
}

type UpdateNetworkSwitchStackRoutingStaticRouteRequestBody struct {
	AdvertiseViaOspfEnabled     *bool   `json:"advertiseViaOspfEnabled"`
	Name                        *string `json:"name"`
	NextHopIP                   *string `json:"nextHopIp"`
	PreferOverOspfRoutesEnabled *bool   `json:"preferOverOspfRoutesEnabled"`
	Subnet                      *string `json:"subnet"`
}

type UpdateNetworkSwitchStackRoutingStaticRouteRequest struct {
	PathParams UpdateNetworkSwitchStackRoutingStaticRoutePathParams
	Request    *UpdateNetworkSwitchStackRoutingStaticRouteRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSwitchStackRoutingStaticRouteResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	UpdateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject map[string]interface{}
}
