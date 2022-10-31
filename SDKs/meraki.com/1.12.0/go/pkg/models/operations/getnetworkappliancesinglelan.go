package operations

type GetNetworkApplianceSingleLanPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkApplianceSingleLanRequest struct {
	PathParams GetNetworkApplianceSingleLanPathParams
}

type GetNetworkApplianceSingleLanResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetNetworkApplianceSingleLan200ApplicationJSONObject map[string]interface{}
}
