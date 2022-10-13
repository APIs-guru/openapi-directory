package operations

import (
	"openapi/pkg/models/shared"
)

type APIKeyPathParams struct {
	ClientID  string `pathParam:"style=simple,explode=false,name=clientId"`
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type APIKeySecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type APIKeyRequest struct {
	PathParams APIKeyPathParams
	Security   APIKeySecurity
}

type APIKeyResponse struct {
	APIKey      *shared.APIKey
	ContentType string
	StatusCode  int64
}
