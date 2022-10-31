package operations

import (
	"openapi/pkg/models/shared"
)

var PostV05HealthInformationTransferServers = []string{
	"https://dev.ndhm.gov.in/hiu",
}

type PostV05HealthInformationTransferHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PostV05HealthInformationTransferRequests struct {
	ApplicationXML   []byte                   `request:"mediaType=application/xml"`
	DataNotification *shared.DataNotification `request:"mediaType=application/json"`
}

type PostV05HealthInformationTransferRequest struct {
	ServerURL *string
	Headers   PostV05HealthInformationTransferHeaders
	Request   PostV05HealthInformationTransferRequests
}

type PostV05HealthInformationTransferResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
