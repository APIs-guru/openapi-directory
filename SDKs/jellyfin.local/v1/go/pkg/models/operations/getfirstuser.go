package operations

import (
	"openapi/pkg/models/shared"
)

type GetFirstUserSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetFirstUserRequest struct {
	Security GetFirstUserSecurity
}

type GetFirstUserResponse struct {
	ContentType    string
	StartupUserDto *shared.StartupUserDto
	StatusCode     int64
}
