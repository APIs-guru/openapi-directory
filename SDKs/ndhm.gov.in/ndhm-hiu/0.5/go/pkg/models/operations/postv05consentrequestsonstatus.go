package operations

import (
	"openapi/pkg/models/shared"
)

var PostV05ConsentRequestsOnStatusServerList = []string{
	"https://dev.ndhm.gov.in/hiu",
}

type PostV05ConsentRequestsOnStatusHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XHiuID        string `header:"style=simple,explode=false,name=X-HIU-ID"`
}

type PostV05ConsentRequestsOnStatusRequests struct {
	ApplicationXML          []byte                          `request:"mediaType=application/xml"`
	HiuConsentRequestStatus *shared.HiuConsentRequestStatus `request:"mediaType=application/json"`
}

type PostV05ConsentRequestsOnStatusRequest struct {
	ServerURL *string
	Headers   PostV05ConsentRequestsOnStatusHeaders
	Request   PostV05ConsentRequestsOnStatusRequests
}

type PostV05ConsentRequestsOnStatusResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
