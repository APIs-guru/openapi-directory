package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDevicesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDevicesUpdateRequest struct {
	PathParams DcimDevicesUpdatePathParams
	Request    shared.WritableDeviceInput `request:"mediaType=application/json"`
}

type DcimDevicesUpdateResponse struct {
	ContentType string
	Device      *shared.Device
	StatusCode  int64
}
