package operations

type CreateNetworkSwitchStackRoutingStaticRoutePathParams struct {
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
}

type CreateNetworkSwitchStackRoutingStaticRouteRequestBody struct {
	AdvertiseViaOspfEnabled     *bool   `json:"advertiseViaOspfEnabled,omitempty"`
	Name                        *string `json:"name,omitempty"`
	NextHopIP                   string  `json:"nextHopIp"`
	PreferOverOspfRoutesEnabled *bool   `json:"preferOverOspfRoutesEnabled,omitempty"`
	Subnet                      string  `json:"subnet"`
}

type CreateNetworkSwitchStackRoutingStaticRouteRequest struct {
	PathParams CreateNetworkSwitchStackRoutingStaticRoutePathParams
	Request    CreateNetworkSwitchStackRoutingStaticRouteRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkSwitchStackRoutingStaticRouteResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	CreateNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject map[string]interface{}
}
