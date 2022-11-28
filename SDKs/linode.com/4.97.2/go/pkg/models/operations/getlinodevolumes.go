package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeVolumesPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetLinodeVolumesQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetLinodeVolumesSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLinodeVolumes200ApplicationJSON struct {
	Data    []shared.Volume `json:"data,omitempty"`
	Page    *int64          `json:"page,omitempty"`
	Pages   *int64          `json:"pages,omitempty"`
	Results *int64          `json:"results,omitempty"`
}

type GetLinodeVolumesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLinodeVolumesRequest struct {
	PathParams  GetLinodeVolumesPathParams
	QueryParams GetLinodeVolumesQueryParams
	Security    GetLinodeVolumesSecurity
}

type GetLinodeVolumesResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetLinodeVolumes200ApplicationJSONObject     *GetLinodeVolumes200ApplicationJSON
	GetLinodeVolumesDefaultApplicationJSONObject *GetLinodeVolumesDefaultApplicationJSON
}
