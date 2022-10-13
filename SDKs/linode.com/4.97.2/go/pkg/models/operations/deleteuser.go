package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type DeleteUserSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteUserSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteUserSecurity struct {
	Option1 *DeleteUserSecurityOption1 `security:"option"`
	Option2 *DeleteUserSecurityOption2 `security:"option"`
}

type DeleteUserRequest struct {
	PathParams DeleteUserPathParams
	Security   DeleteUserSecurity
}

type DeleteUserDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type DeleteUserResponse struct {
	ContentType                            string
	StatusCode                             int64
	DeleteUser200ApplicationJSONObject     map[string]interface{}
	DeleteUserDefaultApplicationJSONObject *DeleteUserDefaultApplicationJSON
}
