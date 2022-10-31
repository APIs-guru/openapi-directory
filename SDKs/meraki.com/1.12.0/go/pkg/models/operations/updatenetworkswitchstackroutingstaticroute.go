package operations

type UpdateNetworkSwitchStackRoutingStaticRoutePathParams struct {
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	StaticRouteID string `pathParam:"style=simple,explode=false,name=staticRouteId"`
	SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
}

type UpdateNetworkSwitchStackRoutingStaticRouteRequestBody struct {
	AdvertiseViaOspfEnabled     *bool   `json:"advertiseViaOspfEnabled,omitempty"`
	Name                        *string `json:"name,omitempty"`
	NextHopIP                   *string `json:"nextHopIp,omitempty"`
	PreferOverOspfRoutesEnabled *bool   `json:"preferOverOspfRoutesEnabled,omitempty"`
	Subnet                      *string `json:"subnet,omitempty"`
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
