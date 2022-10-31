package operations

import (
	"openapi/pkg/models/shared"
)

type ResetClientSecretPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
}

type ResetClientSecretSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type ResetClientSecretSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type ResetClientSecretSecurity struct {
	Option1 *ResetClientSecretSecurityOption1 `security:"option"`
	Option2 *ResetClientSecretSecurityOption2 `security:"option"`
}

type ResetClientSecretRequest struct {
	PathParams ResetClientSecretPathParams
	Security   ResetClientSecretSecurity
}

type ResetClientSecretDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type ResetClientSecretResponse struct {
	ContentType                                   string
	OAuthClient                                   *shared.OAuthClient
	StatusCode                                    int64
	ResetClientSecretDefaultApplicationJSONObject *ResetClientSecretDefaultApplicationJSON
}
