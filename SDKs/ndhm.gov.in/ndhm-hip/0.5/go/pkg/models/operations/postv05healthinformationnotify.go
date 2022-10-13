package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05HealthInformationNotifyHeaders struct {
	Authorization string `header:"name=Authorization"`
	XCmID         string `header:"name=X-CM-ID"`
}

type PostV05HealthInformationNotifyRequests struct {
	ApplicationXML                []byte                                `request:"mediaType=application/xml"`
	HealthInformationNotification *shared.HealthInformationNotification `request:"mediaType=application/json"`
}

type PostV05HealthInformationNotifyRequest struct {
	Headers PostV05HealthInformationNotifyHeaders
	Request PostV05HealthInformationNotifyRequests
}

type PostV05HealthInformationNotifyResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
