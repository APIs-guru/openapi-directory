package operations

import (
	"openapi/pkg/models/shared"
)

type PostUsersUserEmailPermissionsPermissionNamePathParams struct {
	PermissionName shared.PermissionNameEnum `pathParam:"style=simple,explode=false,name=permissionName"`
	UserEmail      string                    `pathParam:"style=simple,explode=false,name=userEmail"`
}

type PostUsersUserEmailPermissionsPermissionNameRequest struct {
	PathParams PostUsersUserEmailPermissionsPermissionNamePathParams
}

type PostUsersUserEmailPermissionsPermissionNameResponse struct {
	ContentType  string
	Error        *shared.Error
	StatusCode   int64
	UserResponse *shared.UserResponse
}
