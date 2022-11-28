package operations

import (
	"openapi/pkg/models/shared"
)

var PostV05LinksLinkConfirmServerList = []string{
	"https://your-hrp-server.com",
}

type PostV05LinksLinkConfirmHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XHipID        string `header:"style=simple,explode=false,name=X-HIP-ID"`
}

type PostV05LinksLinkConfirmRequests struct {
	ApplicationXML          []byte                          `request:"mediaType=application/xml"`
	LinkConfirmationRequest *shared.LinkConfirmationRequest `request:"mediaType=application/json"`
}

type PostV05LinksLinkConfirmRequest struct {
	ServerURL *string
	Headers   PostV05LinksLinkConfirmHeaders
	Request   PostV05LinksLinkConfirmRequests
}

type PostV05LinksLinkConfirmResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
