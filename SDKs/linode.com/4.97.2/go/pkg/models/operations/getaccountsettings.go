package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountSettingsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetAccountSettingsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetAccountSettingsRequest struct {
	Security GetAccountSettingsSecurity
}

type GetAccountSettingsResponse struct {
	AccountSettings                                *shared.AccountSettings
	ContentType                                    string
	StatusCode                                     int64
	GetAccountSettingsDefaultApplicationJSONObject *GetAccountSettingsDefaultApplicationJSON
}
