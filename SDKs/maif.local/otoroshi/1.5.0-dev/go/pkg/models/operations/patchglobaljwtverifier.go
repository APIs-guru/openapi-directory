package operations

import (
	"openapi/pkg/models/shared"
)

type PatchGlobalJwtVerifierPathParams struct {
	VerifierID string `pathParam:"style=simple,explode=false,name=verifierId"`
}

type PatchGlobalJwtVerifierSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type PatchGlobalJwtVerifierRequest struct {
	PathParams PatchGlobalJwtVerifierPathParams
	Request    []shared.Patch `request:"mediaType=application/json"`
	Security   PatchGlobalJwtVerifierSecurity
}

type PatchGlobalJwtVerifierResponse struct {
	ContentType       string
	GlobalJwtVerifier *shared.GlobalJwtVerifier
	StatusCode        int64
}
