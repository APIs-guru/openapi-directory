package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductCountForAllTaxesSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type GetProductCountForAllTaxesRequest struct {
	Security GetProductCountForAllTaxesSecurity
}

type GetProductCountForAllTaxesResponse struct {
	ContentType                 string
	StatusCode                  int64
	TaxRateProductCountResponse *shared.TaxRateProductCountResponse
}
