package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeConfigPathParams struct {
	ConfigID int64 `pathParam:"style=simple,explode=false,name=configId"`
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetLinodeConfigSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLinodeConfigDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLinodeConfigRequest struct {
	PathParams GetLinodeConfigPathParams
	Security   GetLinodeConfigSecurity
}

type GetLinodeConfigResponse struct {
	ContentType                                 string
	LinodeConfig                                *shared.LinodeConfig
	StatusCode                                  int64
	GetLinodeConfigDefaultApplicationJSONObject *GetLinodeConfigDefaultApplicationJSON
}
