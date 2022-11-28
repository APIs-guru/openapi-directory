package operations

import (
	"openapi/pkg/models/shared"
)

type DcimSitesPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimSitesPartialUpdateRequest struct {
	PathParams DcimSitesPartialUpdatePathParams
	Request    shared.WritableSiteInput `request:"mediaType=application/json"`
}

type DcimSitesPartialUpdateResponse struct {
	ContentType string
	Site        *shared.Site
	StatusCode  int64
}
