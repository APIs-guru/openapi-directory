package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteFirewallServers = []string{
	"https://api.linode.com/v4",
}

type DeleteFirewallPathParams struct {
	FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
}

type DeleteFirewallSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteFirewallSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteFirewallSecurity struct {
	Option1 *DeleteFirewallSecurityOption1 `security:"option"`
	Option2 *DeleteFirewallSecurityOption2 `security:"option"`
}

type DeleteFirewallRequest struct {
	ServerURL  *string
	PathParams DeleteFirewallPathParams
	Security   DeleteFirewallSecurity
}

type DeleteFirewallDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteFirewallResponse struct {
	ContentType                                string
	StatusCode                                 int64
	DeleteFirewall200ApplicationJSONObject     map[string]interface{}
	DeleteFirewallDefaultApplicationJSONObject *DeleteFirewallDefaultApplicationJSON
}
