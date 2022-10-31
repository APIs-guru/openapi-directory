package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAccountSettingsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateAccountSettingsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateAccountSettingsSecurity struct {
	Option1 *UpdateAccountSettingsSecurityOption1 `security:"option"`
	Option2 *UpdateAccountSettingsSecurityOption2 `security:"option"`
}

type UpdateAccountSettingsRequest struct {
	Request  shared.AccountSettings `request:"mediaType=application/json"`
	Security UpdateAccountSettingsSecurity
}

type UpdateAccountSettingsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateAccountSettingsResponse struct {
	AccountSettings                                   *shared.AccountSettings
	ContentType                                       string
	StatusCode                                        int64
	UpdateAccountSettingsDefaultApplicationJSONObject *UpdateAccountSettingsDefaultApplicationJSON
}
