package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05LinksLinkOnInitHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type PostV05LinksLinkOnInitRequests struct {
	ApplicationXML             []byte                             `request:"mediaType=application/xml"`
	PatientLinkReferenceResult *shared.PatientLinkReferenceResult `request:"mediaType=application/json"`
}

type PostV05LinksLinkOnInitRequest struct {
	Headers PostV05LinksLinkOnInitHeaders
	Request PostV05LinksLinkOnInitRequests
}

type PostV05LinksLinkOnInitResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
