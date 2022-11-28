package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTaxRatesSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
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
