package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05HealthInformationCmOnRequestHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XHiuID        string `header:"style=simple,explode=false,name=X-HIU-ID"`
}

type PostV05HealthInformationCmOnRequestRequests struct {
	ApplicationXML                      []byte                                      `request:"mediaType=application/xml"`
	HiuHealthInformationRequestResponse *shared.HiuHealthInformationRequestResponse `request:"mediaType=application/json"`
}

type PostV05HealthInformationCmOnRequestRequest struct {
	Headers PostV05HealthInformationCmOnRequestHeaders
	Request PostV05HealthInformationCmOnRequestRequests
}

type PostV05HealthInformationCmOnRequestResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
