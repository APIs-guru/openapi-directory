package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceRolesPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDeviceRolesPartialUpdateRequest struct {
	PathParams DcimDeviceRolesPartialUpdatePathParams
	Request    shared.DeviceRoleInput `request:"mediaType=application/json"`
}

type DcimDeviceRolesPartialUpdateResponse struct {
	ContentType string
	DeviceRole  *shared.DeviceRole
	StatusCode  int64
}
