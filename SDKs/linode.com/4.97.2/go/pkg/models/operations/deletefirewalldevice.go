package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteFirewallDeviceServers = []string{
	"https://api.linode.com/v4",
}

type DeleteFirewallDevicePathParams struct {
	DeviceID   int64 `pathParam:"style=simple,explode=false,name=deviceId"`
	FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
}

type DeleteFirewallDeviceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteFirewallDeviceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteFirewallDeviceSecurity struct {
	Option1 *DeleteFirewallDeviceSecurityOption1 `security:"option"`
	Option2 *DeleteFirewallDeviceSecurityOption2 `security:"option"`
}

type DeleteFirewallDeviceRequest struct {
	ServerURL  *string
	PathParams DeleteFirewallDevicePathParams
	Security   DeleteFirewallDeviceSecurity
}

type DeleteFirewallDeviceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteFirewallDeviceResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	DeleteFirewallDevice200ApplicationJSONObject     map[string]interface{}
	DeleteFirewallDeviceDefaultApplicationJSONObject *DeleteFirewallDeviceDefaultApplicationJSON
}
