package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTaxRatePathParams struct {
	TaxRateUUID string `pathParam:"style=simple,explode=false,name=taxRateUuid"`
}

type DeleteTaxRateSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type DeleteTaxRateRequest struct {
	PathParams DeleteTaxRatePathParams
	Security   DeleteTaxRateSecurity
}

type DeleteTaxRateResponse struct {
	ContentType string
	StatusCode  int64
}
