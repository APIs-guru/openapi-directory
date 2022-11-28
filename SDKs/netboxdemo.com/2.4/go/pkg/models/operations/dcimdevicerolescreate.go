package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceRolesCreateRequest struct {
	Request shared.DeviceRoleInput `request:"mediaType=application/json"`
}

type DcimDeviceRolesCreateResponse struct {
	ContentType string
	DeviceRole  *shared.DeviceRole
	StatusCode  int64
}
