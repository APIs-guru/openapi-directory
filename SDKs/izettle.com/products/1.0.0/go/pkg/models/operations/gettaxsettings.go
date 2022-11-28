package operations

import (
	"openapi/pkg/models/shared"
)

type GetTaxSettingsSecurity struct {
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTaxSettingsRequest struct {
	Security GetTaxSettingsSecurity
}

type GetTaxSettingsResponse struct {
	ContentType         string
	StatusCode          int64
	TaxSettingsResponse *shared.TaxSettingsResponse
}
