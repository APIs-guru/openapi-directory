package operations

import (
	"openapi/pkg/models/shared"
)

type ServiceTargetsPathParams struct {
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type ServiceTargetsSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type ServiceTargetsRequest struct {
	PathParams ServiceTargetsPathParams
	Security   ServiceTargetsSecurity
}

type ServiceTargetsResponse struct {
	ContentType string
	StatusCode  int64
	Targets     []shared.Target
}
