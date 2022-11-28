package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetDomainsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetDomains200ApplicationJSON struct {
	Data    []shared.Domain `json:"data,omitempty"`
	Page    *int64          `json:"page,omitempty"`
	Pages   *int64          `json:"pages,omitempty"`
	Results *int64          `json:"results,omitempty"`
}

type GetDomainsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetDomainsRequest struct {
	QueryParams GetDomainsQueryParams
	Security    GetDomainsSecurity
}

type GetDomainsResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetDomains200ApplicationJSONObject     *GetDomains200ApplicationJSON
	GetDomainsDefaultApplicationJSONObject *GetDomainsDefaultApplicationJSON
}
