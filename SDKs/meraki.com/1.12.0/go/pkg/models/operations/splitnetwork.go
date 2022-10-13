package operations

type SplitNetworkPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type SplitNetworkRequest struct {
	PathParams SplitNetworkPathParams
}

type SplitNetworkResponse struct {
	ContentType                          string
	StatusCode                           int64
	SplitNetwork200ApplicationJSONObject map[string]interface{}
}
