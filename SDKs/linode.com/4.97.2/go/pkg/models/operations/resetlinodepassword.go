package operations

import (
	"openapi/pkg/models/shared"
)

type ResetLinodePasswordPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type ResetLinodePasswordSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type ResetLinodePasswordDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type ResetLinodePasswordRequest struct {
	PathParams ResetLinodePasswordPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   ResetLinodePasswordSecurity
}

type ResetLinodePasswordResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	ResetLinodePassword200ApplicationJSONObject     map[string]interface{}
	ResetLinodePasswordDefaultApplicationJSONObject *ResetLinodePasswordDefaultApplicationJSON
}
