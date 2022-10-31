package operations

import (
	"openapi/pkg/models/shared"
)

var PostV05ConsentRequestsOnInitServers = []string{
	"https://dev.ndhm.gov.in/hiu",
}

type PostV05ConsentRequestsOnInitHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XHiuID        string `header:"style=simple,explode=false,name=X-HIU-ID"`
}

type PostV05ConsentRequestsOnInitRequests struct {
	ApplicationXML             []byte                             `request:"mediaType=application/xml"`
	ConsentRequestInitResponse *shared.ConsentRequestInitResponse `request:"mediaType=application/json"`
}

type PostV05ConsentRequestsOnInitRequest struct {
	ServerURL *string
	Headers   PostV05ConsentRequestsOnInitHeaders
	Request   PostV05ConsentRequestsOnInitRequests
}

type PostV05ConsentRequestsOnInitResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
