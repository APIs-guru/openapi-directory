package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUserSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateUserDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateUserRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security CreateUserSecurity
}

type CreateUserResponse struct {
	ContentType                            string
	StatusCode                             int64
	User                                   *shared.User
	CreateUserDefaultApplicationJSONObject *CreateUserDefaultApplicationJSON
}
