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

type GetLinodeVolumesSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLinodeVolumesSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLinodeVolumesSecurity struct {
	Option1 *GetLinodeVolumesSecurityOption1 `security:"option"`
	Option2 *GetLinodeVolumesSecurityOption2 `security:"option"`
}

type GetLinodeVolumesRequest struct {
	PathParams  GetLinodeVolumesPathParams
	QueryParams GetLinodeVolumesQueryParams
	Security    GetLinodeVolumesSecurity
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

type GetLinodeVolumesResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetLinodeVolumes200ApplicationJSONObject     *GetLinodeVolumes200ApplicationJSON
	GetLinodeVolumesDefaultApplicationJSONObject *GetLinodeVolumesDefaultApplicationJSON
}
