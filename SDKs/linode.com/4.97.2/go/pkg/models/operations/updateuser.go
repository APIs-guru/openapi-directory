package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type UpdateUserSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateUserSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateUserSecurity struct {
	Option1 *UpdateUserSecurityOption1 `security:"option"`
	Option2 *UpdateUserSecurityOption2 `security:"option"`
}

type UpdateUserRequest struct {
	PathParams UpdateUserPathParams
	Request    *shared.User `request:"mediaType=application/json"`
	Security   UpdateUserSecurity
}

type UpdateUserDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type UpdateUserResponse struct {
	ContentType                            string
	StatusCode                             int64
	User                                   *shared.User
	UpdateUserDefaultApplicationJSONObject *UpdateUserDefaultApplicationJSON
}
