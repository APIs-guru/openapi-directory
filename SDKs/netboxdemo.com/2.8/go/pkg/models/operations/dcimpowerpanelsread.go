package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerPanelsReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPowerPanelsReadRequest struct {
	PathParams DcimPowerPanelsReadPathParams
}

type DcimPowerPanelsReadResponse struct {
	ContentType string
	PowerPanel  *shared.PowerPanel
	StatusCode  int64
}
