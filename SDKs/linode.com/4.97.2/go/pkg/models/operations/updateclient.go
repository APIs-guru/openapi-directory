package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateClientPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
}

type UpdateClientSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateClientDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateClientRequest struct {
	PathParams UpdateClientPathParams
	Request    *shared.OAuthClientInput `request:"mediaType=application/json"`
	Security   UpdateClientSecurity
}

type UpdateClientResponse struct {
	ContentType                              string
	OAuthClient                              *shared.OAuthClient
	StatusCode                               int64
	UpdateClientDefaultApplicationJSONObject *UpdateClientDefaultApplicationJSON
}
