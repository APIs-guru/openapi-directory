package operations

import (
	"openapi/pkg/models/shared"
)

type GetPersonQueryParams struct {
	Prefix *string `queryParam:"style=form,explode=true,name=prefix"`
}

type GetPersonSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetPersonRequest struct {
	QueryParams GetPersonQueryParams
	Security    GetPersonSecurity
}

type GetPersonResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
