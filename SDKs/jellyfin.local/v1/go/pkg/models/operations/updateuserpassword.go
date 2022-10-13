package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserPasswordPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UpdateUserPasswordRequests struct {
	UpdateUserPassword  *shared.UpdateUserPassword `request:"mediaType=application/*+json"`
	UpdateUserPassword1 *shared.UpdateUserPassword `request:"mediaType=application/json"`
	UpdateUserPassword2 *shared.UpdateUserPassword `request:"mediaType=text/json"`
}

type UpdateUserPasswordSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateUserPasswordRequest struct {
	PathParams UpdateUserPasswordPathParams
	Request    UpdateUserPasswordRequests
	Security   UpdateUserPasswordSecurity
}

type UpdateUserPasswordResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
