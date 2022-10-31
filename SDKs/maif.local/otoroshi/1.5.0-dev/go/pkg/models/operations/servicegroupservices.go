package operations

import (
	"openapi/pkg/models/shared"
)

type ServiceGroupServicesPathParams struct {
	ServiceGroupID string `pathParam:"style=simple,explode=false,name=serviceGroupId"`
}

type ServiceGroupServicesSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type ServiceGroupServicesRequest struct {
	PathParams ServiceGroupServicesPathParams
	Security   ServiceGroupServicesSecurity
}

type ServiceGroupServicesResponse struct {
	APIKeys     []shared.APIKey
	ContentType string
	StatusCode  int64
}
