package operations

import (
	"openapi/pkg/models/shared"
)

type ImportLibraryV2PathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type ImportLibraryV2SecurityOption1 struct {
	ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ImportLibraryV2SecurityOption2 struct {
	ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
}

type ImportLibraryV2Security struct {
	Option1 *ImportLibraryV2SecurityOption1 `security:"option"`
	Option2 *ImportLibraryV2SecurityOption2 `security:"option"`
}

type ImportLibraryV2Request struct {
	PathParams ImportLibraryV2PathParams
	Request    shared.BulkImportRequest `request:"mediaType=application/json"`
	Security   ImportLibraryV2Security
}

type ImportLibraryV2Response struct {
	ContentType    string
	ErrorResponse  *shared.ErrorResponse
	ImportResponse *shared.ImportResponse
	StatusCode     int64
}
