package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPreferencesSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetUserPreferencesSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetUserPreferencesSecurity struct {
	Option1 *GetUserPreferencesSecurityOption1 `security:"option"`
	Option2 *GetUserPreferencesSecurityOption2 `security:"option"`
}

type GetUserPreferencesRequest struct {
	Security GetUserPreferencesSecurity
}

type GetUserPreferencesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetUserPreferencesResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetUserPreferences200ApplicationJSONObject     map[string]interface{}
	GetUserPreferencesDefaultApplicationJSONObject *GetUserPreferencesDefaultApplicationJSON
}
