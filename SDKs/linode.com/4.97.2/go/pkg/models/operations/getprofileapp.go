package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileAppPathParams struct {
	AppID int64 `pathParam:"style=simple,explode=false,name=appId"`
}

type GetProfileAppSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetProfileAppDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetProfileAppRequest struct {
	PathParams GetProfileAppPathParams
	Security   GetProfileAppSecurity
}

type GetProfileAppResponse struct {
	AuthorizedApp                             *shared.AuthorizedApp
	ContentType                               string
	StatusCode                                int64
	GetProfileAppDefaultApplicationJSONObject *GetProfileAppDefaultApplicationJSON
}
