package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceTypesPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDeviceTypesPartialUpdateRequest struct {
	PathParams DcimDeviceTypesPartialUpdatePathParams
	Request    shared.WritableDeviceTypeInput `request:"mediaType=application/json"`
}

type DcimDeviceTypesPartialUpdateResponse struct {
	ContentType string
	DeviceType  *shared.DeviceType
	StatusCode  int64
}
