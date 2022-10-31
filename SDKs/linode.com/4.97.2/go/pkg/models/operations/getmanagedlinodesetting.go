package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedLinodeSettingPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetManagedLinodeSettingSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetManagedLinodeSettingSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetManagedLinodeSettingSecurity struct {
	Option1 *GetManagedLinodeSettingSecurityOption1 `security:"option"`
	Option2 *GetManagedLinodeSettingSecurityOption2 `security:"option"`
}

type GetManagedLinodeSettingRequest struct {
	PathParams GetManagedLinodeSettingPathParams
	Security   GetManagedLinodeSettingSecurity
}

type GetManagedLinodeSettingDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetManagedLinodeSettingResponse struct {
	ContentType                                         string
	ManagedLinodeSettings                               *shared.ManagedLinodeSettings
	StatusCode                                          int64
	GetManagedLinodeSettingDefaultApplicationJSONObject *GetManagedLinodeSettingDefaultApplicationJSON
}
