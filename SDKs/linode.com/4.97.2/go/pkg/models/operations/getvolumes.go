package operations

import (
	"openapi/pkg/models/shared"
)

type GetVolumesQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetVolumesSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetVolumes200ApplicationJSON struct {
	Data    []shared.Volume `json:"data,omitempty"`
	Page    *int64          `json:"page,omitempty"`
	Pages   *int64          `json:"pages,omitempty"`
	Results *int64          `json:"results,omitempty"`
}

type GetVolumesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetVolumesRequest struct {
	QueryParams GetVolumesQueryParams
	Security    GetVolumesSecurity
}

type GetVolumesResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetVolumes200ApplicationJSONObject     *GetVolumes200ApplicationJSON
	GetVolumesDefaultApplicationJSONObject *GetVolumesDefaultApplicationJSON
}
