package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllImageUrlsPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type GetAllImageUrlsSecurityOption1 struct {
	ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetAllImageUrlsSecurityOption2 struct {
	ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
}

type GetAllImageUrlsSecurity struct {
	Option1 *GetAllImageUrlsSecurityOption1 `security:"option"`
	Option2 *GetAllImageUrlsSecurityOption2 `security:"option"`
}

type GetAllImageUrlsRequest struct {
	PathParams GetAllImageUrlsPathParams
	Security   GetAllImageUrlsSecurity
}

type GetAllImageUrlsResponse struct {
	ContentType           string
	LibraryImagesResponse *shared.LibraryImagesResponse
	StatusCode            int64
}
