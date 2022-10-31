package operations

import (
	"openapi/pkg/models/shared"
)

type SiteTypesIndexPathParams struct {
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type SiteTypesIndexRequest struct {
	PathParams SiteTypesIndexPathParams
}

type SiteTypesIndexResponse struct {
	ContentType      string
	SiteTypeResponse *shared.SiteTypeResponse
	StatusCode       int64
}
