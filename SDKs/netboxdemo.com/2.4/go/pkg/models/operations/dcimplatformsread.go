package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPlatformsReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPlatformsReadRequest struct {
	PathParams DcimPlatformsReadPathParams
}

type DcimPlatformsReadResponse struct {
	ContentType string
	Platform    *shared.Platform
	StatusCode  int64
}
