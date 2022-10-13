package operations

import (
	"openapi/pkg/models/shared"
)

type GetIPv6RangesQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetIPv6RangesSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetIPv6RangesSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetIPv6RangesSecurity struct {
	Option1 *GetIPv6RangesSecurityOption1 `security:"option"`
	Option2 *GetIPv6RangesSecurityOption2 `security:"option"`
}

type GetIPv6RangesRequest struct {
	QueryParams GetIPv6RangesQueryParams
	Security    GetIPv6RangesSecurity
}

type GetIPv6Ranges200ApplicationJSON struct {
	Data    []shared.IPv6Range `json:"data"`
	Page    *int64             `json:"page"`
	Pages   *int64             `json:"pages"`
	Results *int64             `json:"results"`
}

type GetIPv6RangesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetIPv6RangesResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetIPv6Ranges200ApplicationJSONObject     *GetIPv6Ranges200ApplicationJSON
	GetIPv6RangesDefaultApplicationJSONObject *GetIPv6RangesDefaultApplicationJSON
}
