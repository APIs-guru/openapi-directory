package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRequestIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteRequestIDSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type DeleteRequestIDRequest struct {
	PathParams DeleteRequestIDPathParams
	Security   DeleteRequestIDSecurity
}

type DeleteRequestIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
