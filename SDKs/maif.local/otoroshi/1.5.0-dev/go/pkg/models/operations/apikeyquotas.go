package operations

import (
	"openapi/pkg/models/shared"
)

type APIKeyQuotasPathParams struct {
	ClientID  string `pathParam:"style=simple,explode=false,name=clientId"`
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type APIKeyQuotasSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type APIKeyQuotasRequest struct {
	PathParams APIKeyQuotasPathParams
	Security   APIKeyQuotasSecurity
}

type APIKeyQuotasResponse struct {
	ContentType string
	Quotas      *shared.Quotas
	StatusCode  int64
}
