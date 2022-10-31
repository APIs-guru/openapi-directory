package operations

import (
	"openapi/pkg/models/shared"
)

type GetClientPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
}

type GetClientSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetClientSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetClientSecurity struct {
	Option1 *GetClientSecurityOption1 `security:"option"`
	Option2 *GetClientSecurityOption2 `security:"option"`
}

type GetClientRequest struct {
	PathParams GetClientPathParams
	Security   GetClientSecurity
}

type GetClientDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetClientResponse struct {
	ContentType                           string
	OAuthClient                           *shared.OAuthClient
	StatusCode                            int64
	GetClientDefaultApplicationJSONObject *GetClientDefaultApplicationJSON
}
