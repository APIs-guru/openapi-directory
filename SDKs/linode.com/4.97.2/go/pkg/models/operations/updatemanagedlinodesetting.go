package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateManagedLinodeSettingPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type UpdateManagedLinodeSettingSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateManagedLinodeSettingSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateManagedLinodeSettingSecurity struct {
	Option1 *UpdateManagedLinodeSettingSecurityOption1 `security:"option"`
	Option2 *UpdateManagedLinodeSettingSecurityOption2 `security:"option"`
}

type UpdateManagedLinodeSettingRequest struct {
	PathParams UpdateManagedLinodeSettingPathParams
	Request    shared.ManagedLinodeSettings `request:"mediaType=application/json"`
	Security   UpdateManagedLinodeSettingSecurity
}

type UpdateManagedLinodeSettingDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateManagedLinodeSettingResponse struct {
	ContentType                                            string
	ManagedLinodeSettings                                  *shared.ManagedLinodeSettings
	StatusCode                                             int64
	UpdateManagedLinodeSettingDefaultApplicationJSONObject *UpdateManagedLinodeSettingDefaultApplicationJSON
}
