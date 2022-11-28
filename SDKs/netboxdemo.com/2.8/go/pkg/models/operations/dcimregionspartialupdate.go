package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRegionsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRegionsPartialUpdateRequest struct {
	PathParams DcimRegionsPartialUpdatePathParams
	Request    shared.WritableRegionInput `request:"mediaType=application/json"`
}

type DcimRegionsPartialUpdateResponse struct {
	ContentType string
	Region      *shared.Region
	StatusCode  int64
}
