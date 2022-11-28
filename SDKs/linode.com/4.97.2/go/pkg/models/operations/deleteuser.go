package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type DeleteUserSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteUserDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteUserRequest struct {
	PathParams DeleteUserPathParams
	Security   DeleteUserSecurity
}

type DeleteUserResponse struct {
	ContentType                            string
	StatusCode                             int64
	DeleteUser200ApplicationJSONObject     map[string]interface{}
	DeleteUserDefaultApplicationJSONObject *DeleteUserDefaultApplicationJSON
}
