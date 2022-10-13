package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRegionsReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRegionsReadRequest struct {
	PathParams DcimRegionsReadPathParams
}

type DcimRegionsReadResponse struct {
	ContentType string
	Region      *shared.Region
	StatusCode  int64
}
