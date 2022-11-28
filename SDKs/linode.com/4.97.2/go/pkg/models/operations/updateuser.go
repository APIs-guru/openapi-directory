package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type UpdateUserSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateUserDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateUserRequest struct {
	PathParams UpdateUserPathParams
	Request    *shared.UserInput `request:"mediaType=application/json"`
	Security   UpdateUserSecurity
}

type UpdateUserResponse struct {
	ContentType                            string
	StatusCode                             int64
	User                                   *shared.User
	UpdateUserDefaultApplicationJSONObject *UpdateUserDefaultApplicationJSON
}
