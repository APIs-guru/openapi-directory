package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceTypesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDeviceTypesUpdateRequest struct {
	PathParams DcimDeviceTypesUpdatePathParams
	Request    shared.WritableDeviceType `request:"mediaType=application/json"`
}

type DcimDeviceTypesUpdateResponse struct {
	ContentType string
	DeviceType  *shared.DeviceType
	StatusCode  int64
}
