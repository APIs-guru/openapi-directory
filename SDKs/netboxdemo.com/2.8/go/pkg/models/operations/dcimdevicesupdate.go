package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDevicesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDevicesUpdateRequest struct {
	PathParams DcimDevicesUpdatePathParams
	Request    shared.WritableDeviceWithConfigContext `request:"mediaType=application/json"`
}

type DcimDevicesUpdateResponse struct {
	ContentType             string
	DeviceWithConfigContext *shared.DeviceWithConfigContext
	StatusCode              int64
}
