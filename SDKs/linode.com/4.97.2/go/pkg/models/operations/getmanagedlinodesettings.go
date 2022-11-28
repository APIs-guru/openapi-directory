package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedLinodeSettingsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetManagedLinodeSettingsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
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

type GetManagedLinodeSettingsRequest struct {
	QueryParams GetManagedLinodeSettingsQueryParams
	Security    GetManagedLinodeSettingsSecurity
}

type GetManagedLinodeSettingsResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetManagedLinodeSettings200ApplicationJSONObject     *GetManagedLinodeSettings200ApplicationJSON
	GetManagedLinodeSettingsDefaultApplicationJSONObject *GetManagedLinodeSettingsDefaultApplicationJSON
}
