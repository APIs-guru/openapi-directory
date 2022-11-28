package operations

import (
	"openapi/pkg/models/shared"
)

type AddLinodeConfigPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type AddLinodeConfigSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type AddLinodeConfigDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type AddLinodeConfigRequest struct {
	PathParams AddLinodeConfigPathParams
	Request    shared.LinodeConfigInput `request:"mediaType=application/json"`
	Security   AddLinodeConfigSecurity
}

type AddLinodeConfigResponse struct {
	ContentType                                 string
	LinodeConfig                                *shared.LinodeConfig
	StatusCode                                  int64
	AddLinodeConfigDefaultApplicationJSONObject *AddLinodeConfigDefaultApplicationJSON
}
