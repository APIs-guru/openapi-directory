package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerPanelsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPowerPanelsUpdateRequest struct {
	PathParams DcimPowerPanelsUpdatePathParams
	Request    shared.WritablePowerPanelInput `request:"mediaType=application/json"`
}

type DcimPowerPanelsUpdateResponse struct {
	ContentType string
	PowerPanel  *shared.PowerPanel
	StatusCode  int64
}
