package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerOutletsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPowerOutletsUpdateRequest struct {
	PathParams DcimPowerOutletsUpdatePathParams
	Request    shared.WritablePowerOutletInput `request:"mediaType=application/json"`
}

type DcimPowerOutletsUpdateResponse struct {
	ContentType string
	PowerOutlet *shared.PowerOutlet
	StatusCode  int64
}
