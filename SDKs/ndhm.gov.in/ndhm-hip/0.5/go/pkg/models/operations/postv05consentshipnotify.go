package operations

import (
	"openapi/pkg/models/shared"
)

var PostV05ConsentsHipNotifyServers = []string{
	"https://your-hrp-server.com",
}

type PostV05ConsentsHipNotifyHeaders struct {
	Authorization string `header:"name=Authorization"`
	XHipID        string `header:"name=X-HIP-ID"`
}

type PostV05ConsentsHipNotifyRequests struct {
	ApplicationXML         []byte                         `request:"mediaType=application/xml"`
	HipConsentNotification *shared.HipConsentNotification `request:"mediaType=application/json"`
}

type PostV05ConsentsHipNotifyRequest struct {
	ServerURL *string
	Headers   PostV05ConsentsHipNotifyHeaders
	Request   PostV05ConsentsHipNotifyRequests
}

type PostV05ConsentsHipNotifyResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
