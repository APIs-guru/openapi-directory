package operations

import (
	"openapi/pkg/models/shared"
)

type APIKeyFromGroupQuotasPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
	GroupID  string `pathParam:"style=simple,explode=false,name=groupId"`
}

type APIKeyFromGroupQuotasSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type APIKeyFromGroupQuotasRequest struct {
	PathParams APIKeyFromGroupQuotasPathParams
	Security   APIKeyFromGroupQuotasSecurity
}

type APIKeyFromGroupQuotasResponse struct {
	ContentType string
	Quotas      *shared.Quotas
	StatusCode  int64
}
