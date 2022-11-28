package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeDisksPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetLinodeDisksQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetLinodeDisksSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLinodeDisks200ApplicationJSON struct {
	Data    []shared.Disk `json:"data,omitempty"`
	Page    *int64        `json:"page,omitempty"`
	Pages   *int64        `json:"pages,omitempty"`
	Results *int64        `json:"results,omitempty"`
}

type GetLinodeDisksDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLinodeDisksRequest struct {
	PathParams  GetLinodeDisksPathParams
	QueryParams GetLinodeDisksQueryParams
	Security    GetLinodeDisksSecurity
}

type GetLinodeDisksResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetLinodeDisks200ApplicationJSONObject     *GetLinodeDisks200ApplicationJSON
	GetLinodeDisksDefaultApplicationJSONObject *GetLinodeDisksDefaultApplicationJSON
}
