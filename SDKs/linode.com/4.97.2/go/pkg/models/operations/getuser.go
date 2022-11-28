package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetUserSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetUserDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetUserRequest struct {
	PathParams GetUserPathParams
	Security   GetUserSecurity
}

type GetUserResponse struct {
	ContentType                         string
	StatusCode                          int64
	User                                *shared.User
	GetUserDefaultApplicationJSONObject *GetUserDefaultApplicationJSON
}
