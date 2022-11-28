package operations

import (
	"openapi/pkg/models/shared"
)

type ShutdownLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type ShutdownLinodeInstanceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type ShutdownLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type ShutdownLinodeInstanceRequest struct {
	PathParams ShutdownLinodeInstancePathParams
	Security   ShutdownLinodeInstanceSecurity
}

type ShutdownLinodeInstanceResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	ShutdownLinodeInstance200ApplicationJSONObject     map[string]interface{}
	ShutdownLinodeInstanceDefaultApplicationJSONObject *ShutdownLinodeInstanceDefaultApplicationJSON
}
