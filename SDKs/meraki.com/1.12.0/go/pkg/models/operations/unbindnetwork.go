package operations

type UnbindNetworkPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UnbindNetworkRequest struct {
	PathParams UnbindNetworkPathParams
}

type UnbindNetworkResponse struct {
	ContentType                           string
	StatusCode                            int64
	UnbindNetwork200ApplicationJSONObject map[string]interface{}
}
