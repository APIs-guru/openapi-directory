package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRegionsCreateRequest struct {
	Request shared.WritableRegion `request:"mediaType=application/json"`
}

type DcimRegionsCreateResponse struct {
	ContentType string
	Region      *shared.Region
	StatusCode  int64
}
