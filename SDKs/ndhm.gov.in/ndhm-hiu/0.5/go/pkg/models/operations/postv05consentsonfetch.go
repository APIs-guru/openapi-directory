package operations

import (
	"openapi/pkg/models/shared"
)

var PostV05ConsentsOnFetchServers = []string{
	"https://dev.ndhm.gov.in/hiu",
}

type PostV05ConsentsOnFetchHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XHiuID        string `header:"style=simple,explode=false,name=X-HIU-ID"`
}

type PostV05ConsentsOnFetchRequests struct {
	ApplicationXML          []byte                          `request:"mediaType=application/xml"`
	ConsentArtefactResponse *shared.ConsentArtefactResponse `request:"mediaType=application/json"`
}

type PostV05ConsentsOnFetchRequest struct {
	ServerURL *string
	Headers   PostV05ConsentsOnFetchHeaders
	Request   PostV05ConsentsOnFetchRequests
}

type PostV05ConsentsOnFetchResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
