package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServicePathParams struct {
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type UpdateServiceSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceRequest struct {
	PathParams UpdateServicePathParams
	Request    *shared.Service `request:"mediaType=application/json"`
	Security   UpdateServiceSecurity
}

type UpdateServiceResponse struct {
	ContentType string
	Service     *shared.Service
	StatusCode  int64
}
