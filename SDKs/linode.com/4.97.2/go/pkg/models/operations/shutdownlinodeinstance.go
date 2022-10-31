package operations

import (
	"openapi/pkg/models/shared"
)

type ShutdownLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type ShutdownLinodeInstanceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type ShutdownLinodeInstanceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type ShutdownLinodeInstanceSecurity struct {
	Option1 *ShutdownLinodeInstanceSecurityOption1 `security:"option"`
	Option2 *ShutdownLinodeInstanceSecurityOption2 `security:"option"`
}

type ShutdownLinodeInstanceRequest struct {
	PathParams ShutdownLinodeInstancePathParams
	Security   ShutdownLinodeInstanceSecurity
}

type ShutdownLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type ShutdownLinodeInstanceResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	ShutdownLinodeInstance200ApplicationJSONObject     map[string]interface{}
	ShutdownLinodeInstanceDefaultApplicationJSONObject *ShutdownLinodeInstanceDefaultApplicationJSON
}
