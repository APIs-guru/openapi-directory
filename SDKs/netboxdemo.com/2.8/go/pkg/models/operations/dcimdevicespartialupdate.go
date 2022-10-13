package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDevicesPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDevicesPartialUpdateRequest struct {
	PathParams DcimDevicesPartialUpdatePathParams
	Request    shared.WritableDeviceWithConfigContext `request:"mediaType=application/json"`
}

type DcimDevicesPartialUpdateResponse struct {
	ContentType             string
	DeviceWithConfigContext *shared.DeviceWithConfigContext
	StatusCode              int64
}
