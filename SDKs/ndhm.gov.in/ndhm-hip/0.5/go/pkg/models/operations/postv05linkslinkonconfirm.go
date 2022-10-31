package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05LinksLinkOnConfirmHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XCmID         string `header:"style=simple,explode=false,name=X-CM-ID"`
}

type PostV05LinksLinkOnConfirmRequests struct {
	ApplicationXML    []byte                    `request:"mediaType=application/xml"`
	PatientLinkResult *shared.PatientLinkResult `request:"mediaType=application/json"`
}

type PostV05LinksLinkOnConfirmRequest struct {
	Headers PostV05LinksLinkOnConfirmHeaders
	Request PostV05LinksLinkOnConfirmRequests
}

type PostV05LinksLinkOnConfirmResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
