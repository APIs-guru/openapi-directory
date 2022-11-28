package operations

import (
	"openapi/pkg/models/shared"
)

var GetFirewallServerList = []string{
	"https://api.linode.com/v4",
}

type GetFirewallPathParams struct {
	FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
}

type GetFirewallSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetFirewallDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetFirewallRequest struct {
	ServerURL  *string
	PathParams GetFirewallPathParams
	Security   GetFirewallSecurity
}

type GetFirewallResponse struct {
	ContentType                             string
	Firewall                                *shared.Firewall
	StatusCode                              int64
	GetFirewallDefaultApplicationJSONObject *GetFirewallDefaultApplicationJSON
}
