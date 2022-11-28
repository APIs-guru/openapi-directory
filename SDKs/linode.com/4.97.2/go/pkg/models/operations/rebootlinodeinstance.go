package operations

import (
	"openapi/pkg/models/shared"
)

type RebootLinodeInstancePathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type RebootLinodeInstanceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type RebootLinodeInstanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type RebootLinodeInstanceRequest struct {
	PathParams RebootLinodeInstancePathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   RebootLinodeInstanceSecurity
}

type RebootLinodeInstanceResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	RebootLinodeInstance200ApplicationJSONObject     map[string]interface{}
	RebootLinodeInstanceDefaultApplicationJSONObject *RebootLinodeInstanceDefaultApplicationJSON
}
