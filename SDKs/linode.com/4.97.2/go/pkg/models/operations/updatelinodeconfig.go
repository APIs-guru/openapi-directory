package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLinodeConfigPathParams struct {
	ConfigID int64 `pathParam:"style=simple,explode=false,name=configId"`
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type UpdateLinodeConfigSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateLinodeConfigDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateLinodeConfigRequest struct {
	PathParams UpdateLinodeConfigPathParams
	Request    interface{} `request:"mediaType=application/json"`
	Security   UpdateLinodeConfigSecurity
}

type UpdateLinodeConfigResponse struct {
	ContentType                                    string
	LinodeConfig                                   *shared.LinodeConfig
	StatusCode                                     int64
	UpdateLinodeConfigDefaultApplicationJSONObject *UpdateLinodeConfigDefaultApplicationJSON
}
