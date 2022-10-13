package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateClientValidatorPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateClientValidatorSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type UpdateClientValidatorRequest struct {
	PathParams UpdateClientValidatorPathParams
	Request    *shared.ValidationAuthority `request:"mediaType=application/json"`
	Security   UpdateClientValidatorSecurity
}

type UpdateClientValidatorResponse struct {
	ContentType         string
	StatusCode          int64
	ValidationAuthority *shared.ValidationAuthority
}
