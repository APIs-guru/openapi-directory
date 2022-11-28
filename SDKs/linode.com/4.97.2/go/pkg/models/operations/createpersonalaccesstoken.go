package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePersonalAccessTokenSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreatePersonalAccessTokenDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreatePersonalAccessTokenRequest struct {
	Request  interface{} `request:"mediaType=application/json"`
	Security CreatePersonalAccessTokenSecurity
}

type CreatePersonalAccessTokenResponse struct {
	ContentType                                           string
	PersonalAccessToken                                   *shared.PersonalAccessToken
	StatusCode                                            int64
	CreatePersonalAccessTokenDefaultApplicationJSONObject *CreatePersonalAccessTokenDefaultApplicationJSON
}
