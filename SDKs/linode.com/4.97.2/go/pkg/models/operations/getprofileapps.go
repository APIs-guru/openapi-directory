package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileAppsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetProfileAppsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetProfileApps200ApplicationJSON struct {
	Data    []shared.AuthorizedApp `json:"data,omitempty"`
	Page    *int64                 `json:"page,omitempty"`
	Pages   *int64                 `json:"pages,omitempty"`
	Results *int64                 `json:"results,omitempty"`
}

type GetProfileAppsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetProfileAppsRequest struct {
	QueryParams GetProfileAppsQueryParams
	Security    GetProfileAppsSecurity
}

type GetProfileAppsResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetProfileApps200ApplicationJSONObject     *GetProfileApps200ApplicationJSON
	GetProfileAppsDefaultApplicationJSONObject *GetProfileAppsDefaultApplicationJSON
}
