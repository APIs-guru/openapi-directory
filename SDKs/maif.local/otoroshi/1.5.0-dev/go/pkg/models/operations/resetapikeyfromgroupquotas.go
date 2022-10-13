package operations

import (
	"openapi/pkg/models/shared"
)

type ResetAPIKeyFromGroupQuotasPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
	GroupID  string `pathParam:"style=simple,explode=false,name=groupId"`
}

type ResetAPIKeyFromGroupQuotasSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type ResetAPIKeyFromGroupQuotasRequest struct {
	PathParams ResetAPIKeyFromGroupQuotasPathParams
	Security   ResetAPIKeyFromGroupQuotasSecurity
}

type ResetAPIKeyFromGroupQuotasResponse struct {
	ContentType string
	Quotas      *shared.Quotas
	StatusCode  int64
}
