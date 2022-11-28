package operations

import (
	"openapi/pkg/models/shared"
)

type GetLibraryPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type GetLibraryQueryParams struct {
	All          *bool   `queryParam:"style=form,explode=true,name=all"`
	EventLogUUID *string `queryParam:"style=form,explode=true,name=eventLogUuid"`
	Limit        *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset       *string `queryParam:"style=form,explode=true,name=offset"`
}

type GetLibrarySecurity struct {
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetLibraryRequest struct {
	PathParams  GetLibraryPathParams
	QueryParams GetLibraryQueryParams
	Security    GetLibrarySecurity
}

type GetLibraryResponse struct {
	ContentType     string
	Headers         map[string][]string
	LibraryResponse *shared.LibraryResponse
	StatusCode      int64
}
