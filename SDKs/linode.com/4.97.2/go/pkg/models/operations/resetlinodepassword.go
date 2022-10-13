package operations

import (
	"openapi/pkg/models/shared"
)

type ResetLinodePasswordPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type ResetLinodePasswordSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type ResetLinodePasswordSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type ResetLinodePasswordSecurity struct {
	Option1 *ResetLinodePasswordSecurityOption1 `security:"option"`
	Option2 *ResetLinodePasswordSecurityOption2 `security:"option"`
}

type ResetLinodePasswordRequest struct {
	PathParams ResetLinodePasswordPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   ResetLinodePasswordSecurity
}

type ResetLinodePasswordDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type ResetLinodePasswordResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	ResetLinodePassword200ApplicationJSONObject     map[string]interface{}
	ResetLinodePasswordDefaultApplicationJSONObject *ResetLinodePasswordDefaultApplicationJSON
}
