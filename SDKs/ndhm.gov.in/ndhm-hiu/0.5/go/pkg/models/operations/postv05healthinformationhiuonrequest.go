package operations

import (
	"openapi/pkg/models/shared"
)

var PostV05HealthInformationHiuOnRequestServers = []string{
	"https://dev.ndhm.gov.in/hiu",
}

type PostV05HealthInformationHiuOnRequestHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XHiuID        string `header:"style=simple,explode=false,name=X-HIU-ID"`
}

type PostV05HealthInformationHiuOnRequestRequests struct {
	ApplicationXML                      []byte                                      `request:"mediaType=application/xml"`
	HiuHealthInformationRequestResponse *shared.HiuHealthInformationRequestResponse `request:"mediaType=application/json"`
}

type PostV05HealthInformationHiuOnRequestRequest struct {
	ServerURL *string
	Headers   PostV05HealthInformationHiuOnRequestHeaders
	Request   PostV05HealthInformationHiuOnRequestRequests
}

type PostV05HealthInformationHiuOnRequestResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
