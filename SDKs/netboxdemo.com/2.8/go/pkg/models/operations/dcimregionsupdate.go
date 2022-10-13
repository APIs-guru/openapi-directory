package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRegionsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRegionsUpdateRequest struct {
	PathParams DcimRegionsUpdatePathParams
	Request    shared.WritableRegion `request:"mediaType=application/json"`
}

type DcimRegionsUpdateResponse struct {
	ContentType string
	Region      *shared.Region
	StatusCode  int64
}
