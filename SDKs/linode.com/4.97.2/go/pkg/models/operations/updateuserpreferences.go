package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserPreferencesSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateUserPreferencesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateUserPreferencesRequest struct {
	Request  map[string]interface{} `request:"mediaType=application/json"`
	Security UpdateUserPreferencesSecurity
}

type UpdateUserPreferencesResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	UpdateUserPreferences200ApplicationJSONObject     map[string]interface{}
	UpdateUserPreferencesDefaultApplicationJSONObject *UpdateUserPreferencesDefaultApplicationJSON
}
