package operations

import (
	"openapi/pkg/models/shared"
)

type IpamRolesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamRolesUpdateRequest struct {
	PathParams IpamRolesUpdatePathParams
	Request    shared.RoleInput `request:"mediaType=application/json"`
}

type IpamRolesUpdateResponse struct {
	ContentType string
	Role        *shared.Role
	StatusCode  int64
}
