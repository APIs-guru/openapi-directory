package operations

import (
	"openapi/pkg/models/shared"
)

type CreateClientValidatorSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type CreateClientValidatorRequest struct {
	Request  *shared.ValidationAuthority `request:"mediaType=application/json"`
	Security CreateClientValidatorSecurity
}

type CreateClientValidatorResponse struct {
	ContentType         string
	StatusCode          int64
	ValidationAuthority *shared.ValidationAuthority
}
