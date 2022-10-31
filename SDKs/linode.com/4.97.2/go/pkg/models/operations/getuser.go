package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetUserSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetUserSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetUserSecurity struct {
	Option1 *GetUserSecurityOption1 `security:"option"`
	Option2 *GetUserSecurityOption2 `security:"option"`
}

type GetUserRequest struct {
	PathParams GetUserPathParams
	Security   GetUserSecurity
}

type GetUserDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetUserResponse struct {
	ContentType                         string
	StatusCode                          int64
	User                                *shared.User
	GetUserDefaultApplicationJSONObject *GetUserDefaultApplicationJSON
}
