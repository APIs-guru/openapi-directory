package operations

import (
	"openapi/pkg/models/shared"
)

type FindAllClientValidatorsSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type FindAllClientValidatorsRequest struct {
	Security FindAllClientValidatorsSecurity
}

type FindAllClientValidatorsResponse struct {
	ContentType           string
	StatusCode            int64
	ValidationAuthorities []shared.ValidationAuthority
}
