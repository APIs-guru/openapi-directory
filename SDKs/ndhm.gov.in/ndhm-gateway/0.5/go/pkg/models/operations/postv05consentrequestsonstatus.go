package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05ConsentRequestsOnStatusHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XHiuID        string `header:"style=simple,explode=false,name=X-HIU-ID"`
}

type PostV05ConsentRequestsOnStatusRequests struct {
	ApplicationXML          []byte                          `request:"mediaType=application/xml"`
	HiuConsentRequestStatus *shared.HiuConsentRequestStatus `request:"mediaType=application/json"`
}

type PostV05ConsentRequestsOnStatusRequest struct {
	Headers PostV05ConsentRequestsOnStatusHeaders
	Request PostV05ConsentRequestsOnStatusRequests
}

type PostV05ConsentRequestsOnStatusResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
