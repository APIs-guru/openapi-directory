package operations

import (
	"openapi/pkg/models/shared"
)

var GetFirewallServers = []string{
	"https://api.linode.com/v4",
}

type GetFirewallPathParams struct {
	FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
}

type GetFirewallSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetFirewallSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetFirewallSecurity struct {
	Option1 *GetFirewallSecurityOption1 `security:"option"`
	Option2 *GetFirewallSecurityOption2 `security:"option"`
}

type GetFirewallRequest struct {
	ServerURL  *string
	PathParams GetFirewallPathParams
	Security   GetFirewallSecurity
}

type GetFirewallDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetFirewallResponse struct {
	ContentType                             string
	Firewall                                *shared.Firewall
	StatusCode                              int64
	GetFirewallDefaultApplicationJSONObject *GetFirewallDefaultApplicationJSON
}
