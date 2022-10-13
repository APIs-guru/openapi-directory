package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05CareContextsOnDiscoverHeaders struct {
	Authorization string `header:"name=Authorization"`
	XCmID         string `header:"name=X-CM-ID"`
}

type PostV05CareContextsOnDiscoverRequests struct {
	ApplicationXML         []byte                         `request:"mediaType=application/xml"`
	PatientDiscoveryResult *shared.PatientDiscoveryResult `request:"mediaType=application/json"`
}

type PostV05CareContextsOnDiscoverRequest struct {
	Headers PostV05CareContextsOnDiscoverHeaders
	Request PostV05CareContextsOnDiscoverRequests
}

type PostV05CareContextsOnDiscoverResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
