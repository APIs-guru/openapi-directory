package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerPanelsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPowerPanelsPartialUpdateRequest struct {
	PathParams DcimPowerPanelsPartialUpdatePathParams
	Request    shared.WritablePowerPanelInput `request:"mediaType=application/json"`
}

type DcimPowerPanelsPartialUpdateResponse struct {
	ContentType string
	PowerPanel  *shared.PowerPanel
	StatusCode  int64
}
