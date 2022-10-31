package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05ConsentsHipOnNotifyHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XCmID         string `header:"style=simple,explode=false,name=X-CM-ID"`
}

type PostV05ConsentsHipOnNotifyRequests struct {
	ApplicationXML                 []byte                                 `request:"mediaType=application/xml"`
	HipConsentNotificationResponse *shared.HipConsentNotificationResponse `request:"mediaType=application/json"`
}

type PostV05ConsentsHipOnNotifyRequest struct {
	Headers PostV05ConsentsHipOnNotifyHeaders
	Request PostV05ConsentsHipOnNotifyRequests
}

type PostV05ConsentsHipOnNotifyResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
