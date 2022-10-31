package operations

type GetNetworkApplianceStaticRoutePathParams struct {
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	StaticRouteID string `pathParam:"style=simple,explode=false,name=staticRouteId"`
}

type GetNetworkApplianceStaticRouteRequest struct {
	PathParams GetNetworkApplianceStaticRoutePathParams
}

type GetNetworkApplianceStaticRouteResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	GetNetworkApplianceStaticRoute200ApplicationJSONObject map[string]interface{}
}
