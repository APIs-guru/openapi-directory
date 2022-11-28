package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDevicesCreateRequest struct {
	Request shared.WritableDeviceWithConfigContextInput `request:"mediaType=application/json"`
}

type DcimDevicesCreateResponse struct {
	ContentType             string
	DeviceWithConfigContext *shared.DeviceWithConfigContext
	StatusCode              int64
}
