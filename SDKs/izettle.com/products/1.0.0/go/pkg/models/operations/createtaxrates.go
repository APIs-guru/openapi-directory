package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTaxRatesSecurityOption1 struct {
	ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreateTaxRatesSecurityOption2 struct {
	ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
}

type CreateTaxRatesSecurity struct {
	Option1 *CreateTaxRatesSecurityOption1 `security:"option"`
	Option2 *CreateTaxRatesSecurityOption2 `security:"option"`
}

type CreateTaxRatesRequest struct {
	Request  shared.TaxRatesCreateRequest `request:"mediaType=application/json"`
	Security CreateTaxRatesSecurity
}

type CreateTaxRatesResponse struct {
	ContentType      string
	ErrorResponse    *shared.ErrorResponse
	StatusCode       int64
	TaxRatesResponse *shared.TaxRatesResponse
}
