package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServiceTargetsPathParams struct {
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type UpdateServiceTargetsSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceTargetsRequest struct {
	PathParams UpdateServiceTargetsPathParams
	Request    []shared.Patch `request:"mediaType=application/json"`
	Security   UpdateServiceTargetsSecurity
}

type UpdateServiceTargetsResponse struct {
	ContentType string
	StatusCode  int64
	Targets     []shared.Target
}
