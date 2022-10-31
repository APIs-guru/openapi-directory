package operations

import (
	"openapi/pkg/models/shared"
)

type ResetAPIKeyQuotasPathParams struct {
	ClientID  string `pathParam:"style=simple,explode=false,name=clientId"`
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type ResetAPIKeyQuotasSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type ResetAPIKeyQuotasRequest struct {
	PathParams ResetAPIKeyQuotasPathParams
	Security   ResetAPIKeyQuotasSecurity
}

type ResetAPIKeyQuotasResponse struct {
	ContentType string
	Quotas      *shared.Quotas
	StatusCode  int64
}
