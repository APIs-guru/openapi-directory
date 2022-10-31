package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceRolesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDeviceRolesUpdateRequest struct {
	PathParams DcimDeviceRolesUpdatePathParams
	Request    shared.DeviceRole `request:"mediaType=application/json"`
}

type DcimDeviceRolesUpdateResponse struct {
	ContentType string
	DeviceRole  *shared.DeviceRole
	StatusCode  int64
}
