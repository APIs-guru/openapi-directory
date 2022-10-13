package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetDomainsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetDomainsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetDomainsSecurity struct {
	Option1 *GetDomainsSecurityOption1 `security:"option"`
	Option2 *GetDomainsSecurityOption2 `security:"option"`
}

type GetDomainsRequest struct {
	QueryParams GetDomainsQueryParams
	Security    GetDomainsSecurity
}

type GetDomains200ApplicationJSON struct {
	Data    []shared.Domain `json:"data"`
	Page    *int64          `json:"page"`
	Pages   *int64          `json:"pages"`
	Results *int64          `json:"results"`
}

type GetDomainsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetDomainsResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetDomains200ApplicationJSONObject     *GetDomains200ApplicationJSON
	GetDomainsDefaultApplicationJSONObject *GetDomainsDefaultApplicationJSON
}
