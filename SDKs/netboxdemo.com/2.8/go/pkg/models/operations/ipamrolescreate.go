package operations

import (
	"openapi/pkg/models/shared"
)

type IpamRolesCreateRequest struct {
	Request shared.Role `request:"mediaType=application/json"`
}

type IpamRolesCreateResponse struct {
	ContentType string
	Role        *shared.Role
	StatusCode  int64
}
