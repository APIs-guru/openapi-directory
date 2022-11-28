package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPlatformsCreateRequest struct {
	Request shared.WritablePlatformInput `request:"mediaType=application/json"`
}

type DcimPlatformsCreateResponse struct {
	ContentType string
	Platform    *shared.Platform
	StatusCode  int64
}
