package operations

import (
	"openapi/pkg/models/shared"
)

type CancelANumberRequest struct {
	Request shared.NumberDetails `request:"mediaType=application/x-www-form-urlencoded"`
}

type CancelANumberResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	Response     *shared.Response
	Unauthorized *shared.Unauthorized
}
