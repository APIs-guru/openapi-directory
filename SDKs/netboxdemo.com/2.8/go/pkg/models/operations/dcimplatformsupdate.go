package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPlatformsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPlatformsUpdateRequest struct {
	PathParams DcimPlatformsUpdatePathParams
	Request    shared.WritablePlatformInput `request:"mediaType=application/json"`
}

type DcimPlatformsUpdateResponse struct {
	ContentType string
	Platform    *shared.Platform
	StatusCode  int64
}
