package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTaxRatePathParams struct {
	TaxRateUUID string `pathParam:"style=simple,explode=false,name=taxRateUuid"`
}

type UpdateTaxRateSecurityOption1 struct {
	ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateTaxRateSecurityOption2 struct {
	ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
}

type UpdateTaxRateSecurity struct {
	Option1 *UpdateTaxRateSecurityOption1 `security:"option"`
	Option2 *UpdateTaxRateSecurityOption2 `security:"option"`
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
