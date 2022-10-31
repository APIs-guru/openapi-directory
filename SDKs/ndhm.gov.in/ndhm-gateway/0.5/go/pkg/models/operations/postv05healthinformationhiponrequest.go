package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05HealthInformationHipOnRequestHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XCmID         string `header:"style=simple,explode=false,name=X-CM-ID"`
}

type PostV05HealthInformationHipOnRequestRequests struct {
	ApplicationXML                             []byte                                             `request:"mediaType=application/xml"`
	HipHealthInformationRequestAcknowledgement *shared.HipHealthInformationRequestAcknowledgement `request:"mediaType=application/json"`
}

type PostV05HealthInformationHipOnRequestRequest struct {
	Headers PostV05HealthInformationHipOnRequestHeaders
	Request PostV05HealthInformationHipOnRequestRequests
}

type PostV05HealthInformationHipOnRequestResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
