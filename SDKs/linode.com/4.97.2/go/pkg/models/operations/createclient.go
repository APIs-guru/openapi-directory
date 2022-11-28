package operations

import (
	"openapi/pkg/models/shared"
)

type CreateClientRequestBodyInput struct {
	Label       string `json:"label"`
	Public      *bool  `json:"public,omitempty"`
	RedirectURI string `json:"redirect_uri"`
}

type CreateClientSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateClientDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateClientRequest struct {
	Request  *CreateClientRequestBodyInput `request:"mediaType=application/json"`
	Security CreateClientSecurity
}

type CreateClientResponse struct {
	ContentType                              string
	OAuthClient                              *shared.OAuthClient
	StatusCode                               int64
	CreateClientDefaultApplicationJSONObject *CreateClientDefaultApplicationJSON
}
