package operations

import (
	"openapi/pkg/models/shared"
)

var GetFirewallDevicesServerList = []string{
	"https://api.linode.com/v4",
}

type GetFirewallDevicesPathParams struct {
	FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
}

type GetFirewallDevicesQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetFirewallDevicesSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetFirewallDevices200ApplicationJSON struct {
	Data    []shared.FirewallDevices `json:"data,omitempty"`
	Page    *int64                   `json:"page,omitempty"`
	Pages   *int64                   `json:"pages,omitempty"`
	Results *int64                   `json:"results,omitempty"`
}

type GetFirewallDevicesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetFirewallDevicesRequest struct {
	ServerURL   *string
	PathParams  GetFirewallDevicesPathParams
	QueryParams GetFirewallDevicesQueryParams
	Security    GetFirewallDevicesSecurity
}

type GetFirewallDevicesResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetFirewallDevices200ApplicationJSONObject     *GetFirewallDevices200ApplicationJSON
	GetFirewallDevicesDefaultApplicationJSONObject *GetFirewallDevicesDefaultApplicationJSON
}
