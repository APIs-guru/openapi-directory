package operations

type GetNetworkSwitchStackRoutingStaticRoutePathParams struct {
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	StaticRouteID string `pathParam:"style=simple,explode=false,name=staticRouteId"`
	SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
}

type GetNetworkSwitchStackRoutingStaticRouteRequest struct {
	PathParams GetNetworkSwitchStackRoutingStaticRoutePathParams
}

type GetNetworkSwitchStackRoutingStaticRouteResponse struct {
	ContentType                                                     string
	StatusCode                                                      int64
	GetNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject map[string]interface{}
}
