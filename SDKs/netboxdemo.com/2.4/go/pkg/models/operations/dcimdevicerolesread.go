package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceRolesReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDeviceRolesReadRequest struct {
	PathParams DcimDeviceRolesReadPathParams
}

type DcimDeviceRolesReadResponse struct {
	ContentType string
	DeviceRole  *shared.DeviceRole
	StatusCode  int64
}
