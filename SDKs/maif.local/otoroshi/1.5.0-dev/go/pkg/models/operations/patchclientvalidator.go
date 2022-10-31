package operations

import (
	"openapi/pkg/models/shared"
)

type PatchClientValidatorPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchClientValidatorSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type PatchClientValidatorRequest struct {
	PathParams PatchClientValidatorPathParams
	Request    []shared.Patch `request:"mediaType=application/json"`
	Security   PatchClientValidatorSecurity
}

type PatchClientValidatorResponse struct {
	ContentType         string
	StatusCode          int64
	ValidationAuthority *shared.ValidationAuthority
}
