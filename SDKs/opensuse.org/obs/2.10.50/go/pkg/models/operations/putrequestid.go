package operations

import (
	"openapi/pkg/models/shared"
)

type PutRequestIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutRequestIDSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type PutRequestIDRequest struct {
	PathParams PutRequestIDPathParams
	Request    []byte `request:"mediaType=application/xml"`
	Security   PutRequestIDSecurity
}

type PutRequestIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
