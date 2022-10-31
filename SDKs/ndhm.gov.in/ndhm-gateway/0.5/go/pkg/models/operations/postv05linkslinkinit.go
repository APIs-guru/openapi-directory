package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05LinksLinkInitHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XHipID        string `header:"style=simple,explode=false,name=X-HIP-ID"`
}

type PostV05LinksLinkInitRequests struct {
	ApplicationXML              []byte                              `request:"mediaType=application/xml"`
	PatientLinkReferenceRequest *shared.PatientLinkReferenceRequest `request:"mediaType=application/json"`
}

type PostV05LinksLinkInitRequest struct {
	Headers PostV05LinksLinkInitHeaders
	Request PostV05LinksLinkInitRequests
}

type PostV05LinksLinkInitResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
