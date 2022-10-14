package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedLinodeSettingsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetManagedLinodeSettingsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetManagedLinodeSettingsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetManagedLinodeSettingsSecurity struct {
	Option1 *GetManagedLinodeSettingsSecurityOption1 `security:"option"`
	Option2 *GetManagedLinodeSettingsSecurityOption2 `security:"option"`
}

type GetManagedLinodeSettingsRequest struct {
	QueryParams GetManagedLinodeSettingsQueryParams
	Security    GetManagedLinodeSettingsSecurity
}

type GetManagedLinodeSettings200ApplicationJSON struct {
	Data    []shared.ManagedLinodeSettings `json:"data,omitempty"`
	Page    *int64                         `json:"page,omitempty"`
	Pages   *int64                         `json:"pages,omitempty"`
	Results *int64                         `json:"results,omitempty"`
}

type GetManagedLinodeSettingsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetManagedLinodeSettingsResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetManagedLinodeSettings200ApplicationJSONObject     *GetManagedLinodeSettings200ApplicationJSON
	GetManagedLinodeSettingsDefaultApplicationJSONObject *GetManagedLinodeSettingsDefaultApplicationJSON
}
