package operations

import (
	"openapi/pkg/models/shared"
)

type TfaDisableSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type TfaDisableSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type TfaDisableSecurity struct {
	Option1 *TfaDisableSecurityOption1 `security:"option"`
	Option2 *TfaDisableSecurityOption2 `security:"option"`
}

type TfaDisableRequest struct {
	Security TfaDisableSecurity
}

type TfaDisableDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type TfaDisableResponse struct {
	ContentType                            string
	StatusCode                             int64
	TfaDisable200ApplicationJSONObject     map[string]interface{}
	TfaDisableDefaultApplicationJSONObject *TfaDisableDefaultApplicationJSON
}
