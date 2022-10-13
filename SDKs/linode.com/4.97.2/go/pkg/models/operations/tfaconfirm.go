package operations

import (
	"openapi/pkg/models/shared"
)

type TfaConfirmSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type TfaConfirmSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type TfaConfirmSecurity struct {
	Option1 *TfaConfirmSecurityOption1 `security:"option"`
	Option2 *TfaConfirmSecurityOption2 `security:"option"`
}

type TfaConfirmRequest struct {
	Request  interface{} `request:"mediaType=application/json"`
	Security TfaConfirmSecurity
}

type TfaConfirmDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type TfaConfirmResponse struct {
	ContentType                            string
	StatusCode                             int64
	TfaConfirm200ApplicationJSONAny        *interface{}
	TfaConfirmDefaultApplicationJSONObject *TfaConfirmDefaultApplicationJSON
}
