package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeConfigsPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetLinodeConfigsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetLinodeConfigsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLinodeConfigsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLinodeConfigsSecurity struct {
	Option1 *GetLinodeConfigsSecurityOption1 `security:"option"`
	Option2 *GetLinodeConfigsSecurityOption2 `security:"option"`
}

type GetLinodeConfigsRequest struct {
	PathParams  GetLinodeConfigsPathParams
	QueryParams GetLinodeConfigsQueryParams
	Security    GetLinodeConfigsSecurity
}

type GetLinodeConfigs200ApplicationJSON struct {
	Data    []shared.LinodeConfig `json:"data,omitempty"`
	Page    *int64                `json:"page,omitempty"`
	Pages   *int64                `json:"pages,omitempty"`
	Results *int64                `json:"results,omitempty"`
}

type GetLinodeConfigsResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetLinodeConfigs200ApplicationJSONObject *GetLinodeConfigs200ApplicationJSON
}
