package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCertPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteCertSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type DeleteCertRequest struct {
	PathParams DeleteCertPathParams
	Security   DeleteCertSecurity
}

type DeleteCertResponse struct {
	ContentType string
	Deleted     *shared.Deleted
	StatusCode  int64
}
