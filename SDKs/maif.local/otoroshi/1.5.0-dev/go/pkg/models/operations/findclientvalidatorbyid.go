package operations

import (
	"openapi/pkg/models/shared"
)

type FindClientValidatorByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type FindClientValidatorByIDSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type FindClientValidatorByIDRequest struct {
	PathParams FindClientValidatorByIDPathParams
	Security   FindClientValidatorByIDSecurity
}

type FindClientValidatorByIDResponse struct {
	ContentType         string
	StatusCode          int64
	ValidationAuthority *shared.ValidationAuthority
}
