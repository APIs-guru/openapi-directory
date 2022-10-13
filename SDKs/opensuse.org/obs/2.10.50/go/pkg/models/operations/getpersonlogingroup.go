package operations

import (
	"openapi/pkg/models/shared"
)

type GetPersonLoginGroupPathParams struct {
	Login string `pathParam:"style=simple,explode=false,name=login"`
}

type GetPersonLoginGroupSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetPersonLoginGroupRequest struct {
	PathParams GetPersonLoginGroupPathParams
	Security   GetPersonLoginGroupSecurity
}

type GetPersonLoginGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
