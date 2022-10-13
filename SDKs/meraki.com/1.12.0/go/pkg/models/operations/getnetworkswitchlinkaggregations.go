package operations

type GetNetworkSwitchLinkAggregationsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSwitchLinkAggregationsRequest struct {
	PathParams GetNetworkSwitchLinkAggregationsPathParams
}

type GetNetworkSwitchLinkAggregationsResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	GetNetworkSwitchLinkAggregations200ApplicationJSONObject map[string]interface{}
}
