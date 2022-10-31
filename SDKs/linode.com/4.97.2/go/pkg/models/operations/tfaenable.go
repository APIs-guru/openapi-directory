package operations

import (
	"openapi/pkg/models/shared"
)

type TfaEnableSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type TfaEnableSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type TfaEnableSecurity struct {
	Option1 *TfaEnableSecurityOption1 `security:"option"`
	Option2 *TfaEnableSecurityOption2 `security:"option"`
}

type TfaEnableRequest struct {
	Security TfaEnableSecurity
}

type TfaEnableDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type TfaEnableResponse struct {
	ContentType                           string
	StatusCode                            int64
	TfaEnable200ApplicationJSONAny        *interface{}
	TfaEnableDefaultApplicationJSONObject *TfaEnableDefaultApplicationJSON
}
