package operations

type GetNetworkWebhooksHTTPServersPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkWebhooksHTTPServersRequest struct {
	PathParams GetNetworkWebhooksHTTPServersPathParams
}

type GetNetworkWebhooksHTTPServersResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	GetNetworkWebhooksHTTPServers200ApplicationJSONObject map[string]interface{}
}
