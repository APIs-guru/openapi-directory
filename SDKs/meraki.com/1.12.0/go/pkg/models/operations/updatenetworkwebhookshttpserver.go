package operations

type UpdateNetworkWebhooksHTTPServerPathParams struct {
	HTTPServerID string `pathParam:"style=simple,explode=false,name=httpServerId"`
	NetworkID    string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkWebhooksHTTPServerRequestBody struct {
	Name         *string `json:"name"`
	SharedSecret *string `json:"sharedSecret"`
	URL          *string `json:"url"`
}

type UpdateNetworkWebhooksHTTPServerRequest struct {
	PathParams UpdateNetworkWebhooksHTTPServerPathParams
	Request    *UpdateNetworkWebhooksHTTPServerRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkWebhooksHTTPServerResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	UpdateNetworkWebhooksHTTPServer200ApplicationJSONObject map[string]interface{}
}
