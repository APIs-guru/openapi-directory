package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05ConsentsHiuOnNotifyHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PostV05ConsentsHiuOnNotifyRequest struct {
	Headers PostV05ConsentsHiuOnNotifyHeaders
	Request shared.HiuConsentNotificationResponse `request:"mediaType=application/json"`
}

type PostV05ConsentsHiuOnNotifyResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
