package operations

import (
	"openapi/pkg/models/shared"
)

var PostV05ConsentsHiuNotifyServers = []string{
	"https://dev.ndhm.gov.in/hiu",
}

type PostV05ConsentsHiuNotifyHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XHiuID        string `header:"style=simple,explode=false,name=X-HIU-ID"`
}

type PostV05ConsentsHiuNotifyRequest struct {
	ServerURL *string
	Headers   PostV05ConsentsHiuNotifyHeaders
	Request   shared.HiuConsentNotificationEvent `request:"mediaType=application/json"`
}

type PostV05ConsentsHiuNotifyResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
