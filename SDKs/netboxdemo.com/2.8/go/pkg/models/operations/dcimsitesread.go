package operations

import (
	"openapi/pkg/models/shared"
)

type DcimSitesReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimSitesReadRequest struct {
	PathParams DcimSitesReadPathParams
}

type DcimSitesReadResponse struct {
	ContentType string
	Site        *shared.Site
	StatusCode  int64
}
