package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateManagedLinodeSettingPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type UpdateManagedLinodeSettingSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateManagedLinodeSettingDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateManagedLinodeSettingRequest struct {
	PathParams UpdateManagedLinodeSettingPathParams
	Request    shared.ManagedLinodeSettingsInput `request:"mediaType=application/json"`
	Security   UpdateManagedLinodeSettingSecurity
}

type UpdateManagedLinodeSettingResponse struct {
	ContentType                                            string
	ManagedLinodeSettings                                  *shared.ManagedLinodeSettings
	StatusCode                                             int64
	UpdateManagedLinodeSettingDefaultApplicationJSONObject *UpdateManagedLinodeSettingDefaultApplicationJSON
}
