package operations

import (
	"openapi/pkg/models/shared"
)

type GetTaxRatesSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type GetTaxRatesRequest struct {
	Security GetTaxRatesSecurity
}

type GetTaxRatesResponse struct {
	ContentType       string
	StatusCode        int64
	TaxRatesResponses []shared.TaxRatesResponse
}
