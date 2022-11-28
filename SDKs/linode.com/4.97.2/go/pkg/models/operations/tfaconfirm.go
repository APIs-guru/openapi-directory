package operations

import (
	"openapi/pkg/models/shared"
)

type TfaConfirmSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type TfaConfirmDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type TfaConfirmRequest struct {
	Request  interface{} `request:"mediaType=application/json"`
	Security TfaConfirmSecurity
}

type TfaConfirmResponse struct {
	ContentType                            string
	StatusCode                             int64
	TfaConfirm200ApplicationJSONAny        *interface{}
	TfaConfirmDefaultApplicationJSONObject *TfaConfirmDefaultApplicationJSON
}
