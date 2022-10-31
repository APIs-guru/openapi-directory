package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerOutletsReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPowerOutletsReadRequest struct {
	PathParams DcimPowerOutletsReadPathParams
}

type DcimPowerOutletsReadResponse struct {
	ContentType string
	PowerOutlet *shared.PowerOutlet
	StatusCode  int64
}
