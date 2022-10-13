package operations

import (
	"openapi/pkg/models/shared"
)

type SitesIndexPathParams struct {
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type SitesIndexRequest struct {
	PathParams SitesIndexPathParams
}

type SitesIndexResponse struct {
	ContentType  string
	SiteResponse *shared.SiteResponse
	StatusCode   int64
}
