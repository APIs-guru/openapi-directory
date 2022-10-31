package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserByIDPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetUserByIDSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetUserByIDRequest struct {
	PathParams GetUserByIDPathParams
	Security   GetUserByIDSecurity
}

type GetUserByIDResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
	UserDto        *shared.UserDto
}
