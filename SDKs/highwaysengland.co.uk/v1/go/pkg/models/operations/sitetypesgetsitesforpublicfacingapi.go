package operations

import (
	"openapi/pkg/models/shared"
)

type SiteTypesGetSitesForPublicFacingAPIPathParams struct {
	SiteTypeID int32  `pathParam:"style=simple,explode=false,name=siteType_Id"`
	Version    string `pathParam:"style=simple,explode=false,name=version"`
}

type SiteTypesGetSitesForPublicFacingAPIRequest struct {
	PathParams SiteTypesGetSitesForPublicFacingAPIPathParams
}

type SiteTypesGetSitesForPublicFacingAPIResponse struct {
	ContentType   string
	SiteTypeLayer *shared.SiteTypeLayer
	StatusCode    int64
}
