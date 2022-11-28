package operations

import (
	"openapi/pkg/models/shared"
)

var PostV05CareContextsDiscoverServerList = []string{
	"https://your-hrp-server.com",
}

type PostV05CareContextsDiscoverHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XHipID        string `header:"style=simple,explode=false,name=X-HIP-ID"`
}

type PostV05CareContextsDiscoverRequests struct {
	ApplicationXML          []byte                          `request:"mediaType=application/xml"`
	PatientDiscoveryRequest *shared.PatientDiscoveryRequest `request:"mediaType=application/json"`
}

type PostV05CareContextsDiscoverRequest struct {
	ServerURL *string
	Headers   PostV05CareContextsDiscoverHeaders
	Request   PostV05CareContextsDiscoverRequests
}

type PostV05CareContextsDiscoverResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
