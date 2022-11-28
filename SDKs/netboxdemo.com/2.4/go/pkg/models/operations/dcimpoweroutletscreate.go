package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerOutletsCreateRequest struct {
	Request shared.WritablePowerOutletInput `request:"mediaType=application/json"`
}

type DcimPowerOutletsCreateResponse struct {
	ContentType string
	PowerOutlet *shared.PowerOutlet
	StatusCode  int64
}
