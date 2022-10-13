package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProfileAppPathParams struct {
	AppID int64 `pathParam:"style=simple,explode=false,name=appId"`
}

type DeleteProfileAppSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteProfileAppSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteProfileAppSecurity struct {
	Option1 *DeleteProfileAppSecurityOption1 `security:"option"`
	Option2 *DeleteProfileAppSecurityOption2 `security:"option"`
}

type DeleteProfileAppRequest struct {
	PathParams DeleteProfileAppPathParams
	Security   DeleteProfileAppSecurity
}

type DeleteProfileAppDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type DeleteProfileAppResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	DeleteProfileApp200ApplicationJSONObject     map[string]interface{}
	DeleteProfileAppDefaultApplicationJSONObject *DeleteProfileAppDefaultApplicationJSON
}
