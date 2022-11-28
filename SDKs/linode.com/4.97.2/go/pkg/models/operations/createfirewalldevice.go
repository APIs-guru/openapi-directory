package operations

import (
	"openapi/pkg/models/shared"
)

var CreateFirewallDeviceServerList = []string{
	"https://api.linode.com/v4",
}

type CreateFirewallDevicePathParams struct {
	FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
}

type CreateFirewallDeviceRequestBodyTypeEnum string

const (
	CreateFirewallDeviceRequestBodyTypeEnumLinode CreateFirewallDeviceRequestBodyTypeEnum = "linode"
)

type CreateFirewallDeviceRequestBodyInput struct {
	ID   int64                                   `json:"id"`
	Type CreateFirewallDeviceRequestBodyTypeEnum `json:"type"`
}

type CreateFirewallDeviceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateFirewallDeviceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateFirewallDeviceRequest struct {
	ServerURL  *string
	PathParams CreateFirewallDevicePathParams
	Request    *CreateFirewallDeviceRequestBodyInput `request:"mediaType=application/json"`
	Security   CreateFirewallDeviceSecurity
}

type CreateFirewallDeviceResponse struct {
	ContentType                                      string
	FirewallDevices                                  *shared.FirewallDevices
	StatusCode                                       int64
	CreateFirewallDeviceDefaultApplicationJSONObject *CreateFirewallDeviceDefaultApplicationJSON
}
