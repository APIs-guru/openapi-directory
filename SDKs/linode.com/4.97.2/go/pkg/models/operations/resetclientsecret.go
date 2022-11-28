package operations

import (
	"openapi/pkg/models/shared"
)

type ResetClientSecretPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
}

type ResetClientSecretSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type ResetClientSecretDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type ResetClientSecretRequest struct {
	PathParams ResetClientSecretPathParams
	Security   ResetClientSecretSecurity
}

type ResetClientSecretResponse struct {
	ContentType                                   string
	OAuthClient                                   *shared.OAuthClient
	StatusCode                                    int64
	ResetClientSecretDefaultApplicationJSONObject *ResetClientSecretDefaultApplicationJSON
}
