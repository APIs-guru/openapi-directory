package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerPortsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPowerPortsUpdateRequest struct {
	PathParams DcimPowerPortsUpdatePathParams
	Request    shared.WritablePowerPortInput `request:"mediaType=application/json"`
}

type DcimPowerPortsUpdateResponse struct {
	ContentType string
	PowerPort   *shared.PowerPort
	StatusCode  int64
}
