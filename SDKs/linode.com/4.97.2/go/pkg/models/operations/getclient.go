package operations

import (
	"openapi/pkg/models/shared"
)

type GetClientPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
}

type GetClientSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetClientDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetClientRequest struct {
	PathParams GetClientPathParams
	Security   GetClientSecurity
}

type GetClientResponse struct {
	ContentType                           string
	OAuthClient                           *shared.OAuthClient
	StatusCode                            int64
	GetClientDefaultApplicationJSONObject *GetClientDefaultApplicationJSON
}
