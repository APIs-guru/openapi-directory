package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTaxRatePathParams struct {
	TaxRateUUID string `pathParam:"style=simple,explode=false,name=taxRateUuid"`
}

type UpdateTaxRateSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type UpdateTaxRateRequest struct {
	PathParams UpdateTaxRatePathParams
	Request    shared.TaxRateUpdateRequest `request:"mediaType=application/json"`
	Security   UpdateTaxRateSecurity
}

type UpdateTaxRateResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	TaxRate       *shared.TaxRate
}
