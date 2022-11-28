package operations

import (
	"openapi/pkg/models/shared"
)

type TfaEnableSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type TfaEnableDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type TfaEnableRequest struct {
	Security TfaEnableSecurity
}

type TfaEnableResponse struct {
	ContentType                           string
	StatusCode                            int64
	TfaEnable200ApplicationJSONAny        *interface{}
	TfaEnableDefaultApplicationJSONObject *TfaEnableDefaultApplicationJSON
}
