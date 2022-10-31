package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGlobalJwtVerifierSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type CreateGlobalJwtVerifierRequest struct {
	Request  *shared.GlobalJwtVerifier `request:"mediaType=application/json"`
	Security CreateGlobalJwtVerifierSecurity
}

type CreateGlobalJwtVerifierResponse struct {
	ContentType       string
	GlobalJwtVerifier *shared.GlobalJwtVerifier
	StatusCode        int64
}
