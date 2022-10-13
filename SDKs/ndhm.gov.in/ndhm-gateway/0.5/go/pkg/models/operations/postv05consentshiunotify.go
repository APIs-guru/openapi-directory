package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05ConsentsHiuNotifyHeaders struct {
	Authorization string `header:"name=Authorization"`
	XHiuID        string `header:"name=X-HIU-ID"`
}

type PostV05ConsentsHiuNotifyRequest struct {
	Headers PostV05ConsentsHiuNotifyHeaders
	Request shared.HiuConsentNotificationEvent `request:"mediaType=application/json"`
}

type PostV05ConsentsHiuNotifyResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
