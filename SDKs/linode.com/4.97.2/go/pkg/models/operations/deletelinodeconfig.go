package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLinodeConfigPathParams struct {
	ConfigID int64 `pathParam:"style=simple,explode=false,name=configId"`
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type DeleteLinodeConfigSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteLinodeConfigDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteLinodeConfigRequest struct {
	PathParams DeleteLinodeConfigPathParams
	Security   DeleteLinodeConfigSecurity
}

type DeleteLinodeConfigResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	DeleteLinodeConfig200ApplicationJSONObject     map[string]interface{}
	DeleteLinodeConfigDefaultApplicationJSONObject *DeleteLinodeConfigDefaultApplicationJSON
}
