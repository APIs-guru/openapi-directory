package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05ConsentRequestsStatusHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PostV05ConsentRequestsStatusRequests struct {
	ApplicationXML              []byte                              `request:"mediaType=application/xml"`
	ConsentRequestStatusRequest *shared.ConsentRequestStatusRequest `request:"mediaType=application/json"`
}

type PostV05ConsentRequestsStatusRequest struct {
	Headers PostV05ConsentRequestsStatusHeaders
	Request PostV05ConsentRequestsStatusRequests
}

type PostV05ConsentRequestsStatusResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
