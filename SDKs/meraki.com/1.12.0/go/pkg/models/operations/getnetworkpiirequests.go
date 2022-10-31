package operations

type GetNetworkPiiRequestsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkPiiRequestsRequest struct {
	PathParams GetNetworkPiiRequestsPathParams
}

type GetNetworkPiiRequestsResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetNetworkPiiRequests200ApplicationJSONObject map[string]interface{}
}
