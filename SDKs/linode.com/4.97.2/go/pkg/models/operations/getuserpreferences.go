package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPreferencesSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetUserPreferencesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetUserPreferencesRequest struct {
	Security GetUserPreferencesSecurity
}

type GetUserPreferencesResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetUserPreferences200ApplicationJSONObject     map[string]interface{}
	GetUserPreferencesDefaultApplicationJSONObject *GetUserPreferencesDefaultApplicationJSON
}
