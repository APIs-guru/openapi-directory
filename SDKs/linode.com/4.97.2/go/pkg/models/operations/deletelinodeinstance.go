package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type DeleteLinodeInstanceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteLinodeInstanceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteLinodeInstanceSecurity struct {
	Option1 *DeleteLinodeInstanceSecurityOption1 `security:"option"`
	Option2 *DeleteLinodeInstanceSecurityOption2 `security:"option"`
}

type DeleteLinodeInstanceRequest struct {
	PathParams DeleteLinodeInstancePathParams
	Security   DeleteLinodeInstanceSecurity
}

type DeleteLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteLinodeInstanceResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	DeleteLinodeInstance200ApplicationJSONObject     map[string]interface{}
	DeleteLinodeInstanceDefaultApplicationJSONObject *DeleteLinodeInstanceDefaultApplicationJSON
}
