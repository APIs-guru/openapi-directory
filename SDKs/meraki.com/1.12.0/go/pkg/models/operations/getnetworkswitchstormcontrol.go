package operations

type GetNetworkSwitchStormControlPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSwitchStormControlRequest struct {
	PathParams GetNetworkSwitchStormControlPathParams
}

type GetNetworkSwitchStormControlResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetNetworkSwitchStormControl200ApplicationJSONObject map[string]interface{}
}
