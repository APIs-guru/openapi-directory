package operations

import (
	"openapi/pkg/models/shared"
)

type TfaDisableSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type TfaDisableDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type TfaDisableRequest struct {
	Security TfaDisableSecurity
}

type TfaDisableResponse struct {
	ContentType                            string
	StatusCode                             int64
	TfaDisable200ApplicationJSONObject     map[string]interface{}
	TfaDisableDefaultApplicationJSONObject *TfaDisableDefaultApplicationJSON
}
