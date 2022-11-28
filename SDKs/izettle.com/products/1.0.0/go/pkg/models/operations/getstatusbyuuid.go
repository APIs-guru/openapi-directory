package operations

import (
	"openapi/pkg/models/shared"
)

type GetStatusByUUIDPathParams struct {
	ImportUUID       string `pathParam:"style=simple,explode=false,name=importUuid"`
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type GetStatusByUUIDSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type GetStatusByUUIDRequest struct {
	PathParams GetStatusByUUIDPathParams
	Security   GetStatusByUUIDSecurity
}

type GetStatusByUUIDResponse struct {
	ContentType    string
	ImportResponse *shared.ImportResponse
	StatusCode     int64
}
