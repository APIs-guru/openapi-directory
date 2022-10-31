package operations

import (
	"openapi/pkg/models/shared"
)

type ServiceDeleteTargetPathParams struct {
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type ServiceDeleteTargetSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type ServiceDeleteTargetRequest struct {
	PathParams ServiceDeleteTargetPathParams
	Security   ServiceDeleteTargetSecurity
}

type ServiceDeleteTargetResponse struct {
	ContentType string
	StatusCode  int64
	Targets     []shared.Target
}
