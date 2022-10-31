package operations

import (
	"openapi/pkg/models/shared"
)

type ServicePathParams struct {
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type ServiceSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type ServiceRequest struct {
	PathParams ServicePathParams
	Security   ServiceSecurity
}

type ServiceResponse struct {
	ContentType string
	Service     *shared.Service
	StatusCode  int64
}
