package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAccountSettingsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateAccountSettingsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateAccountSettingsRequest struct {
	Request  shared.AccountSettingsInput `request:"mediaType=application/json"`
	Security UpdateAccountSettingsSecurity
}

type UpdateAccountSettingsResponse struct {
	AccountSettings                                   *shared.AccountSettings
	ContentType                                       string
	StatusCode                                        int64
	UpdateAccountSettingsDefaultApplicationJSONObject *UpdateAccountSettingsDefaultApplicationJSON
}
