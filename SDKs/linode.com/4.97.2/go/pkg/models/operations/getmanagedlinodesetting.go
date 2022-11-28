package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedLinodeSettingPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetManagedLinodeSettingSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetManagedLinodeSettingDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetManagedLinodeSettingRequest struct {
	PathParams GetManagedLinodeSettingPathParams
	Security   GetManagedLinodeSettingSecurity
}

type GetManagedLinodeSettingResponse struct {
	ContentType                                         string
	ManagedLinodeSettings                               *shared.ManagedLinodeSettings
	StatusCode                                          int64
	GetManagedLinodeSettingDefaultApplicationJSONObject *GetManagedLinodeSettingDefaultApplicationJSON
}
