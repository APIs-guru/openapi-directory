package operations

import (
	"openapi/pkg/models/shared"
)

type GetTaxRatePathParams struct {
	TaxRateUUID string `pathParam:"style=simple,explode=false,name=taxRateUuid"`
}

type GetTaxRateSecurityOption1 struct {
	ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTaxRateSecurityOption2 struct {
	ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
}

type GetTaxRateSecurity struct {
	Option1 *GetTaxRateSecurityOption1 `security:"option"`
	Option2 *GetTaxRateSecurityOption2 `security:"option"`
}

type GetTaxRateRequest struct {
	PathParams GetTaxRatePathParams
	Security   GetTaxRateSecurity
}

type GetTaxRateResponse struct {
	ContentType string
	StatusCode  int64
	TaxRate     *shared.TaxRate
}
