package operations

import (
	"openapi/pkg/models/shared"
)

type InitiateServiceSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type InitiateServiceRequest struct {
	Security InitiateServiceSecurity
}

type InitiateServiceResponse struct {
	ContentType string
	Service     *shared.Service
	StatusCode  int64
}
