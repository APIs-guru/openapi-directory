package operations

import (
	"openapi/pkg/models/shared"
)

var GetFirewallDevicesServers = []string{
	"https://api.linode.com/v4",
}

type GetFirewallDevicesPathParams struct {
	FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
}

type GetFirewallDevicesQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetFirewallDevicesSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetFirewallDevicesSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetFirewallDevicesSecurity struct {
	Option1 *GetFirewallDevicesSecurityOption1 `security:"option"`
	Option2 *GetFirewallDevicesSecurityOption2 `security:"option"`
}

type GetFirewallDevicesRequest struct {
	ServerURL   *string
	PathParams  GetFirewallDevicesPathParams
	QueryParams GetFirewallDevicesQueryParams
	Security    GetFirewallDevicesSecurity
}

type GetFirewallDevices200ApplicationJSON struct {
	Data    []shared.FirewallDevices `json:"data"`
	Page    *int64                   `json:"page"`
	Pages   *int64                   `json:"pages"`
	Results *int64                   `json:"results"`
}

type GetFirewallDevicesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetFirewallDevicesResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetFirewallDevices200ApplicationJSONObject     *GetFirewallDevices200ApplicationJSON
	GetFirewallDevicesDefaultApplicationJSONObject *GetFirewallDevicesDefaultApplicationJSON
}
