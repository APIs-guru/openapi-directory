package operations

import (
	"openapi/pkg/models/shared"
)

type VerifyControlPathParams struct {
	Format shared.FormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type VerifyControlRequest struct {
	PathParams VerifyControlPathParams
	Request    shared.ControlRequest `request:"mediaType=application/x-www-form-urlencoded"`
}

type VerifyControlResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	VerifyControl200ApplicationJSONOneOf *interface{}
}
