package operations

import (
	"openapi/pkg/models/shared"
)

var GetFirewallsServers = []string{
	"https://api.linode.com/v4",
}

type GetFirewallsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetFirewallsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetFirewallsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetFirewallsSecurity struct {
	Option1 *GetFirewallsSecurityOption1 `security:"option"`
	Option2 *GetFirewallsSecurityOption2 `security:"option"`
}

type GetFirewallsRequest struct {
	ServerURL   *string
	QueryParams GetFirewallsQueryParams
	Security    GetFirewallsSecurity
}

type GetFirewalls200ApplicationJSON struct {
	Data    []shared.Firewall `json:"data"`
	Page    *int64            `json:"page"`
	Pages   *int64            `json:"pages"`
	Results *int64            `json:"results"`
}

type GetFirewallsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetFirewallsResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetFirewalls200ApplicationJSONObject     *GetFirewalls200ApplicationJSON
	GetFirewallsDefaultApplicationJSONObject *GetFirewallsDefaultApplicationJSON
}
