package operations

type SwapNetworkApplianceWarmSparePathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type SwapNetworkApplianceWarmSpareRequest struct {
	PathParams SwapNetworkApplianceWarmSparePathParams
}

type SwapNetworkApplianceWarmSpareResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	SwapNetworkApplianceWarmSpare200ApplicationJSONObject map[string]interface{}
}
