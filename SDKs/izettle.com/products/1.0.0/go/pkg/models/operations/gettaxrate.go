package operations

import (
	"openapi/pkg/models/shared"
)

type GetTaxRatePathParams struct {
	TaxRateUUID string `pathParam:"style=simple,explode=false,name=taxRateUuid"`
}

type GetTaxRateSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
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
