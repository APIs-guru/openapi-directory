package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05HealthInformationRequestHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PostV05HealthInformationRequestRequests struct {
	ApplicationXML []byte            `request:"mediaType=application/xml"`
	HiRequest      *shared.HiRequest `request:"mediaType=application/json"`
}

type PostV05HealthInformationRequestRequest struct {
	Headers PostV05HealthInformationRequestHeaders
	Request PostV05HealthInformationRequestRequests
}

type PostV05HealthInformationRequestResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
