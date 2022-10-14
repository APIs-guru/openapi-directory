package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserPreferencesSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateUserPreferencesSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateUserPreferencesSecurity struct {
	Option1 *UpdateUserPreferencesSecurityOption1 `security:"option"`
	Option2 *UpdateUserPreferencesSecurityOption2 `security:"option"`
}

type UpdateUserPreferencesRequest struct {
	Request  map[string]interface{} `request:"mediaType=application/json"`
	Security UpdateUserPreferencesSecurity
}

type UpdateUserPreferencesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateUserPreferencesResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	UpdateUserPreferences200ApplicationJSONObject     map[string]interface{}
	UpdateUserPreferencesDefaultApplicationJSONObject *UpdateUserPreferencesDefaultApplicationJSON
}
