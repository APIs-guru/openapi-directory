package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05UsersAuthOnNotifyHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XCmID         string `header:"style=simple,explode=false,name=X-CM-ID"`
}

type PostV05UsersAuthOnNotifyRequests struct {
	ApplicationXML                         []byte                                         `request:"mediaType=application/xml"`
	PatientAuthNotificationAcknowledgement *shared.PatientAuthNotificationAcknowledgement `request:"mediaType=application/json"`
}

type PostV05UsersAuthOnNotifyRequest struct {
	Headers PostV05UsersAuthOnNotifyHeaders
	Request PostV05UsersAuthOnNotifyRequests
}

type PostV05UsersAuthOnNotifyResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
