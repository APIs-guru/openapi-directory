package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProfileAppPathParams struct {
	AppID int64 `pathParam:"style=simple,explode=false,name=appId"`
}

type DeleteProfileAppSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteProfileAppDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteProfileAppRequest struct {
	PathParams DeleteProfileAppPathParams
	Security   DeleteProfileAppSecurity
}

type DeleteProfileAppResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	DeleteProfileApp200ApplicationJSONObject     map[string]interface{}
	DeleteProfileAppDefaultApplicationJSONObject *DeleteProfileAppDefaultApplicationJSON
}
