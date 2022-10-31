package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05ConsentRequestsInitHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PostV05ConsentRequestsInitRequests struct {
	ApplicationXML []byte                 `request:"mediaType=application/xml"`
	ConsentRequest *shared.ConsentRequest `request:"mediaType=application/json"`
}

type PostV05ConsentRequestsInitRequest struct {
	Headers PostV05ConsentRequestsInitHeaders
	Request PostV05ConsentRequestsInitRequests
}

type PostV05ConsentRequestsInitResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
