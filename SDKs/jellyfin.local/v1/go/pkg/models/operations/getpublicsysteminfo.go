package operations

import (
	"openapi/pkg/models/shared"
)

type GetPublicSystemInfoResponse struct {
	ContentType      string
	PublicSystemInfo *shared.PublicSystemInfo
	StatusCode       int64
}
