package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceTypesCreateRequest struct {
	Request shared.WritableDeviceType `request:"mediaType=application/json"`
}

type DcimDeviceTypesCreateResponse struct {
	ContentType string
	DeviceType  *shared.DeviceType
	StatusCode  int64
}
