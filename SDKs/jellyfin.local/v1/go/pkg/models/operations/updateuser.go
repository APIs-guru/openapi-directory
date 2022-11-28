package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UpdateUserRequestsInput struct {
	UserDto  *shared.UserDtoInput `request:"mediaType=application/*+json"`
	UserDto1 *shared.UserDtoInput `request:"mediaType=application/json"`
	UserDto2 *shared.UserDtoInput `request:"mediaType=text/json"`
}

type UpdateUserSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateUserRequest struct {
	PathParams UpdateUserPathParams
	Request    UpdateUserRequestsInput
	Security   UpdateUserSecurity
}

type UpdateUserResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
