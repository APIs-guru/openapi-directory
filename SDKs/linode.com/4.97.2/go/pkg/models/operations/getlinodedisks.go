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

type GetLinodeDisksSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLinodeDisksSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLinodeDisksSecurity struct {
	Option1 *GetLinodeDisksSecurityOption1 `security:"option"`
	Option2 *GetLinodeDisksSecurityOption2 `security:"option"`
}

type GetLinodeDisksRequest struct {
	PathParams  GetLinodeDisksPathParams
	QueryParams GetLinodeDisksQueryParams
	Security    GetLinodeDisksSecurity
}

type GetLinodeDisks200ApplicationJSON struct {
	Data    []shared.Disk `json:"data"`
	Page    *int64        `json:"page"`
	Pages   *int64        `json:"pages"`
	Results *int64        `json:"results"`
}

type GetLinodeDisksDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetLinodeDisksResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetLinodeDisks200ApplicationJSONObject     *GetLinodeDisks200ApplicationJSON
	GetLinodeDisksDefaultApplicationJSONObject *GetLinodeDisksDefaultApplicationJSON
}
