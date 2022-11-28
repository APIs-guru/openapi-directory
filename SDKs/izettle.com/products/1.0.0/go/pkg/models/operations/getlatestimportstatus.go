package operations

import (
	"openapi/pkg/models/shared"
)

type GetLatestImportStatusPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type GetLatestImportStatusSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type GetLatestImportStatusRequest struct {
	PathParams GetLatestImportStatusPathParams
	Security   GetLatestImportStatusSecurity
}

type GetLatestImportStatusResponse struct {
	ContentType    string
	ImportResponse *shared.ImportResponse
	StatusCode     int64
}
