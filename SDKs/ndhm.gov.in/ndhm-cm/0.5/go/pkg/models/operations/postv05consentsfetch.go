package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05ConsentsFetchHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PostV05ConsentsFetchRequest struct {
	Headers PostV05ConsentsFetchHeaders
	Request shared.ConsentFetchRequest `request:"mediaType=application/json"`
}

type PostV05ConsentsFetchResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
