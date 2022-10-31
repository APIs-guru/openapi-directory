package operations

import (
	"openapi/pkg/models/shared"
)

var GetFirewallDeviceServers = []string{
	"https://api.linode.com/v4",
}

type GetFirewallDevicePathParams struct {
	DeviceID   int64 `pathParam:"style=simple,explode=false,name=deviceId"`
	FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
}

type GetFirewallDeviceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetFirewallDeviceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetFirewallDeviceSecurity struct {
	Option1 *GetFirewallDeviceSecurityOption1 `security:"option"`
	Option2 *GetFirewallDeviceSecurityOption2 `security:"option"`
}

type GetFirewallDeviceRequest struct {
	ServerURL  *string
	PathParams GetFirewallDevicePathParams
	Security   GetFirewallDeviceSecurity
}

type GetFirewallDeviceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetFirewallDeviceResponse struct {
	ContentType                                   string
	FirewallDevices                               *shared.FirewallDevices
	StatusCode                                    int64
	GetFirewallDeviceDefaultApplicationJSONObject *GetFirewallDeviceDefaultApplicationJSON
}
