package operations

type GetNetworkApplianceContentFilteringPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkApplianceContentFilteringRequest struct {
	PathParams GetNetworkApplianceContentFilteringPathParams
}

type GetNetworkApplianceContentFilteringResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	GetNetworkApplianceContentFiltering200ApplicationJSONObject map[string]interface{}
}
