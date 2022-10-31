package operations

import (
	"openapi/pkg/models/shared"
)

type APIKeysPathParams struct {
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type APIKeysSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type APIKeysRequest struct {
	PathParams APIKeysPathParams
	Security   APIKeysSecurity
}

type APIKeysResponse struct {
	APIKeys     []shared.APIKey
	ContentType string
	StatusCode  int64
}
