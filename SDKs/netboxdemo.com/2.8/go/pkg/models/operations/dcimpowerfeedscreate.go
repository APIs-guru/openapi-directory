package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerFeedsCreateRequest struct {
	Request shared.WritablePowerFeed `request:"mediaType=application/json"`
}

type DcimPowerFeedsCreateResponse struct {
	ContentType string
	PowerFeed   *shared.PowerFeed
	StatusCode  int64
}
