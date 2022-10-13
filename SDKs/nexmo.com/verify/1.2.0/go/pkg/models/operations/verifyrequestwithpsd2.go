package operations

import (
	"openapi/pkg/models/shared"
)

type VerifyRequestWithPsd2PathParams struct {
	Format shared.FormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type VerifyRequestWithPsd2Request struct {
	PathParams VerifyRequestWithPsd2PathParams
	Request    shared.Psd2Request `request:"mediaType=application/x-www-form-urlencoded"`
}

type VerifyRequestWithPsd2Response struct {
	ContentType                                  string
	StatusCode                                   int64
	VerifyRequestWithPsd2200ApplicationJSONOneOf *interface{}
}
