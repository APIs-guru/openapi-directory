package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllImageUrlsPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type GetAllImageUrlsSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
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
