package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05LinksLinkAddContextsHeaders struct {
	Authorization string `header:"name=Authorization"`
	XCmID         string `header:"name=X-CM-ID"`
}

type PostV05LinksLinkAddContextsRequests struct {
	ApplicationXML                []byte                                `request:"mediaType=application/xml"`
	PatientCareContextLinkRequest *shared.PatientCareContextLinkRequest `request:"mediaType=application/json"`
}

type PostV05LinksLinkAddContextsRequest struct {
	Headers PostV05LinksLinkAddContextsHeaders
	Request PostV05LinksLinkAddContextsRequests
}

type PostV05LinksLinkAddContextsResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
