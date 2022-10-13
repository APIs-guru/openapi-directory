package operations

import (
	"openapi/pkg/models/shared"
)

type GetIPv6PoolsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetIPv6PoolsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetIPv6PoolsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetIPv6PoolsSecurity struct {
	Option1 *GetIPv6PoolsSecurityOption1 `security:"option"`
	Option2 *GetIPv6PoolsSecurityOption2 `security:"option"`
}

type GetIPv6PoolsRequest struct {
	QueryParams GetIPv6PoolsQueryParams
	Security    GetIPv6PoolsSecurity
}

type GetIPv6Pools200ApplicationJSON struct {
	Data    []shared.IPv6Pool `json:"data"`
	Page    *int64            `json:"page"`
	Pages   *int64            `json:"pages"`
	Results *int64            `json:"results"`
}

type GetIPv6PoolsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetIPv6PoolsResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetIPv6Pools200ApplicationJSONObject     *GetIPv6Pools200ApplicationJSON
	GetIPv6PoolsDefaultApplicationJSONObject *GetIPv6PoolsDefaultApplicationJSON
}
