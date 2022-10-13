package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDevicesNapalmPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDevicesNapalmRequest struct {
	PathParams DcimDevicesNapalmPathParams
}

type DcimDevicesNapalmResponse struct {
	ContentType string
	Device      *shared.Device
	StatusCode  int64
}
