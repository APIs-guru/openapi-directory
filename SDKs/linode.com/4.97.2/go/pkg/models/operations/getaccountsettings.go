package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountSettingsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetAccountSettingsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetAccountSettingsSecurity struct {
	Option1 *GetAccountSettingsSecurityOption1 `security:"option"`
	Option2 *GetAccountSettingsSecurityOption2 `security:"option"`
}

type GetAccountSettingsRequest struct {
	Security GetAccountSettingsSecurity
}

type GetAccountSettingsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetAccountSettingsResponse struct {
	AccountSettings                                *shared.AccountSettings
	ContentType                                    string
	StatusCode                                     int64
	GetAccountSettingsDefaultApplicationJSONObject *GetAccountSettingsDefaultApplicationJSON
}
