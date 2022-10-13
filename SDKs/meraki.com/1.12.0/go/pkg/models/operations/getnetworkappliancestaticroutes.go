package operations

type GetNetworkApplianceStaticRoutesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkApplianceStaticRoutesRequest struct {
	PathParams GetNetworkApplianceStaticRoutesPathParams
}

type GetNetworkApplianceStaticRoutesResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	GetNetworkApplianceStaticRoutes200ApplicationJSONObject map[string]interface{}
}
