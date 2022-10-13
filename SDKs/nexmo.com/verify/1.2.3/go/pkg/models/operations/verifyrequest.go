package operations

import (
	"openapi/pkg/models/shared"
)

type VerifyRequestPathParams struct {
	Format shared.FormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type VerifyRequestRequest struct {
	PathParams VerifyRequestPathParams
	Request    shared.VerifyRequest `request:"mediaType=application/x-www-form-urlencoded"`
}

type VerifyRequestResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	VerifyRequest200ApplicationJSONOneOf *interface{}
}
