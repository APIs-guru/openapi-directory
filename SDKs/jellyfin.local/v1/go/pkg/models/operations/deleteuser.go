package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type DeleteUserSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteUserRequest struct {
	PathParams DeleteUserPathParams
	Security   DeleteUserSecurity
}

type DeleteUserResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
