package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerPanelsCreateRequest struct {
	Request shared.WritablePowerPanelInput `request:"mediaType=application/json"`
}

type DcimPowerPanelsCreateResponse struct {
	ContentType string
	PowerPanel  *shared.PowerPanel
	StatusCode  int64
}
