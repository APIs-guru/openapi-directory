package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05UsersAuthNotifyHeaders struct {
	Authorization string `header:"name=Authorization"`
	XHipID        string `header:"name=X-HIP-ID"`
	XHiuID        string `header:"name=X-HIU-ID"`
}

type PostV05UsersAuthNotifyRequests struct {
	ApplicationXML          []byte                          `request:"mediaType=application/xml"`
	PatientAuthNotification *shared.PatientAuthNotification `request:"mediaType=application/json"`
}

type PostV05UsersAuthNotifyRequest struct {
	Headers PostV05UsersAuthNotifyHeaders
	Request PostV05UsersAuthNotifyRequests
}

type PostV05UsersAuthNotifyResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
