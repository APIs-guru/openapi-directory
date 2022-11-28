package operations

import (
	"openapi/pkg/models/shared"
)

type GetIPv6PoolsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetIPv6PoolsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetIPv6Pools200ApplicationJSON struct {
	Data    []shared.IPv6Pool `json:"data,omitempty"`
	Page    *int64            `json:"page,omitempty"`
	Pages   *int64            `json:"pages,omitempty"`
	Results *int64            `json:"results,omitempty"`
}

type GetIPv6PoolsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetIPv6PoolsRequest struct {
	QueryParams GetIPv6PoolsQueryParams
	Security    GetIPv6PoolsSecurity
}

type GetIPv6PoolsResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetIPv6Pools200ApplicationJSONObject     *GetIPv6Pools200ApplicationJSON
	GetIPv6PoolsDefaultApplicationJSONObject *GetIPv6PoolsDefaultApplicationJSON
}
