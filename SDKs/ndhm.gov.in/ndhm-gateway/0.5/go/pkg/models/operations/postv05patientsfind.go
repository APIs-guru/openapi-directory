package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05PatientsFindHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XCmID         string `header:"style=simple,explode=false,name=X-CM-ID"`
}

type PostV05PatientsFindRequests struct {
	ApplicationXML               []byte                               `request:"mediaType=application/xml"`
	PatientIdentificationRequest *shared.PatientIdentificationRequest `request:"mediaType=application/json"`
}

type PostV05PatientsFindRequest struct {
	Headers PostV05PatientsFindHeaders
	Request PostV05PatientsFindRequests
}

type PostV05PatientsFindResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
