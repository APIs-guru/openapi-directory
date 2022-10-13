package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCertSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type CreateCertRequest struct {
	Request  *shared.Certificate `request:"mediaType=application/json"`
	Security CreateCertSecurity
}

type CreateCertResponse struct {
	Certificate *shared.Certificate
	ContentType string
	StatusCode  int64
}
