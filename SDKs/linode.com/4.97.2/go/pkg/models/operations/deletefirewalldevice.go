package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteFirewallDeviceServerList = []string{
	"https://api.linode.com/v4",
}

type DeleteFirewallDevicePathParams struct {
	DeviceID   int64 `pathParam:"style=simple,explode=false,name=deviceId"`
	FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
}

type DeleteFirewallDeviceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteFirewallDeviceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteFirewallDeviceRequest struct {
	ServerURL  *string
	PathParams DeleteFirewallDevicePathParams
	Security   DeleteFirewallDeviceSecurity
}

type DeleteFirewallDeviceResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	DeleteFirewallDevice200ApplicationJSONObject     map[string]interface{}
	DeleteFirewallDeviceDefaultApplicationJSONObject *DeleteFirewallDeviceDefaultApplicationJSON
}
