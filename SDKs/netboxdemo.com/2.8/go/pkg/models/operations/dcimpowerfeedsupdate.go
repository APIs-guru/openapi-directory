package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerFeedsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPowerFeedsUpdateRequest struct {
	PathParams DcimPowerFeedsUpdatePathParams
	Request    shared.WritablePowerFeed `request:"mediaType=application/json"`
}

type DcimPowerFeedsUpdateResponse struct {
	ContentType string
	PowerFeed   *shared.PowerFeed
	StatusCode  int64
}
