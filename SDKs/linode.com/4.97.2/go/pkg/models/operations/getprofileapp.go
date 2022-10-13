package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileAppPathParams struct {
	AppID int64 `pathParam:"style=simple,explode=false,name=appId"`
}

type GetProfileAppSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetProfileAppSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetProfileAppSecurity struct {
	Option1 *GetProfileAppSecurityOption1 `security:"option"`
	Option2 *GetProfileAppSecurityOption2 `security:"option"`
}

type GetProfileAppRequest struct {
	PathParams GetProfileAppPathParams
	Security   GetProfileAppSecurity
}

type GetProfileAppDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetProfileAppResponse struct {
	AuthorizedApp                             *shared.AuthorizedApp
	ContentType                               string
	StatusCode                                int64
	GetProfileAppDefaultApplicationJSONObject *GetProfileAppDefaultApplicationJSON
}
