package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLinodeConfigPathParams struct {
	ConfigID int64 `pathParam:"style=simple,explode=false,name=configId"`
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type DeleteLinodeConfigSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteLinodeConfigSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteLinodeConfigSecurity struct {
	Option1 *DeleteLinodeConfigSecurityOption1 `security:"option"`
	Option2 *DeleteLinodeConfigSecurityOption2 `security:"option"`
}

type DeleteLinodeConfigRequest struct {
	PathParams DeleteLinodeConfigPathParams
	Security   DeleteLinodeConfigSecurity
}

type DeleteLinodeConfigDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type DeleteLinodeConfigResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	DeleteLinodeConfig200ApplicationJSONObject     map[string]interface{}
	DeleteLinodeConfigDefaultApplicationJSONObject *DeleteLinodeConfigDefaultApplicationJSON
}
