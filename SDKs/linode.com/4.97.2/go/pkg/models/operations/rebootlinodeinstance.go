package operations

import (
	"openapi/pkg/models/shared"
)

type RebootLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type RebootLinodeInstanceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type RebootLinodeInstanceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type RebootLinodeInstanceSecurity struct {
	Option1 *RebootLinodeInstanceSecurityOption1 `security:"option"`
	Option2 *RebootLinodeInstanceSecurityOption2 `security:"option"`
}

type RebootLinodeInstanceRequest struct {
	PathParams RebootLinodeInstancePathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   RebootLinodeInstanceSecurity
}

type RebootLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type RebootLinodeInstanceResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	RebootLinodeInstance200ApplicationJSONObject     map[string]interface{}
	RebootLinodeInstanceDefaultApplicationJSONObject *RebootLinodeInstanceDefaultApplicationJSON
}
