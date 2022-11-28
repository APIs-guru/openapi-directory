package operations

import (
	"openapi/pkg/models/shared"
)

var GetFirewallDeviceServerList = []string{
	"https://api.linode.com/v4",
}

type GetFirewallDevicePathParams struct {
	DeviceID   int64 `pathParam:"style=simple,explode=false,name=deviceId"`
	FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
}

type GetFirewallDeviceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetFirewallDeviceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetFirewallDeviceRequest struct {
	ServerURL  *string
	PathParams GetFirewallDevicePathParams
	Security   GetFirewallDeviceSecurity
}

type GetFirewallDeviceResponse struct {
	ContentType                                   string
	FirewallDevices                               *shared.FirewallDevices
	StatusCode                                    int64
	GetFirewallDeviceDefaultApplicationJSONObject *GetFirewallDeviceDefaultApplicationJSON
}
