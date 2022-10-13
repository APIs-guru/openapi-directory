package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserEasyPasswordPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UpdateUserEasyPasswordRequests struct {
	UpdateUserEasyPassword  *shared.UpdateUserEasyPassword `request:"mediaType=application/*+json"`
	UpdateUserEasyPassword1 *shared.UpdateUserEasyPassword `request:"mediaType=application/json"`
	UpdateUserEasyPassword2 *shared.UpdateUserEasyPassword `request:"mediaType=text/json"`
}

type UpdateUserEasyPasswordSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateUserEasyPasswordRequest struct {
	PathParams UpdateUserEasyPasswordPathParams
	Request    UpdateUserEasyPasswordRequests
	Security   UpdateUserEasyPasswordSecurity
}

type UpdateUserEasyPasswordResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
