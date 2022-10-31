package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceTypesReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDeviceTypesReadRequest struct {
	PathParams DcimDeviceTypesReadPathParams
}

type DcimDeviceTypesReadResponse struct {
	ContentType string
	DeviceType  *shared.DeviceType
	StatusCode  int64
}
