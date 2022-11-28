package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllOptionsPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type GetAllOptionsSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type GetAllOptionsRequest struct {
	PathParams GetAllOptionsPathParams
	Security   GetAllOptionsSecurity
}

type GetAllOptionsResponse struct {
	ContentType             string
	StatusCode              int64
	VariantOptionsResponses []shared.VariantOptionsResponse
}
