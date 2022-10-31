package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05PatientsSmsNotifyHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XCmID         string `header:"style=simple,explode=false,name=X-CM-ID"`
}

type PostV05PatientsSmsNotifyRequests struct {
	ApplicationXML               []byte                               `request:"mediaType=application/xml"`
	PatientSmsNotifcationRequest *shared.PatientSmsNotifcationRequest `request:"mediaType=application/json"`
}

type PostV05PatientsSmsNotifyRequest struct {
	Headers PostV05PatientsSmsNotifyHeaders
	Request PostV05PatientsSmsNotifyRequests
}

type PostV05PatientsSmsNotifyResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
