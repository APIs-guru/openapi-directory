package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetUserByIDSecurity struct {
	CookieSid shared.SchemeCookieSid `security:"scheme,type=apiKey,subtype=cookie"`
}

type GetUserByIDRequest struct {
	PathParams GetUserByIDPathParams
	Security   GetUserByIDSecurity
}

type GetUserByIDResponseOutput struct {
	ContentType string
	StatusCode  int64
	User        *shared.UserOutput
}
