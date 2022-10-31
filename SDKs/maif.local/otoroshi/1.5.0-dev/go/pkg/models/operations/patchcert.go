package operations

import (
	"openapi/pkg/models/shared"
)

type PatchCertPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchCertSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type PatchCertRequest struct {
	PathParams PatchCertPathParams
	Request    []shared.Patch `request:"mediaType=application/json"`
	Security   PatchCertSecurity
}

type PatchCertResponse struct {
	Certificate *shared.Certificate
	ContentType string
	StatusCode  int64
}
