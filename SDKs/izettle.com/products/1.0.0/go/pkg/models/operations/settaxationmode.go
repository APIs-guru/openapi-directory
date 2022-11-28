package operations

import (
	"openapi/pkg/models/shared"
)

type SetTaxationModeSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type SetTaxationModeRequest struct {
	Request  shared.TaxSettingsUpdateRequest `request:"mediaType=application/json"`
	Security SetTaxationModeSecurity
}

type SetTaxationModeResponse struct {
	ContentType         string
	ErrorResponse       *shared.ErrorResponse
	StatusCode          int64
	TaxSettingsResponse *shared.TaxSettingsResponse
}
