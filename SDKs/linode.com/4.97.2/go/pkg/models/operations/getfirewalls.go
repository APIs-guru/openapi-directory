package operations

import (
	"openapi/pkg/models/shared"
)

var GetFirewallsServerList = []string{
	"https://api.linode.com/v4",
}

type GetFirewallsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetFirewallsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetFirewalls200ApplicationJSON struct {
	Data    []shared.Firewall `json:"data,omitempty"`
	Page    *int64            `json:"page,omitempty"`
	Pages   *int64            `json:"pages,omitempty"`
	Results *int64            `json:"results,omitempty"`
}

type GetFirewallsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetFirewallsRequest struct {
	ServerURL   *string
	QueryParams GetFirewallsQueryParams
	Security    GetFirewallsSecurity
}

type GetFirewallsResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetFirewalls200ApplicationJSONObject     *GetFirewalls200ApplicationJSON
	GetFirewallsDefaultApplicationJSONObject *GetFirewallsDefaultApplicationJSON
}
