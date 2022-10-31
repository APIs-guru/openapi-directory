package operations

type DeleteNetworkWebhooksHTTPServerPathParams struct {
	HTTPServerID string `pathParam:"style=simple,explode=false,name=httpServerId"`
	NetworkID    string `pathParam:"style=simple,explode=false,name=networkId"`
}

type DeleteNetworkWebhooksHTTPServerRequest struct {
	PathParams DeleteNetworkWebhooksHTTPServerPathParams
}

type DeleteNetworkWebhooksHTTPServerResponse struct {
	ContentType string
	StatusCode  int64
}
