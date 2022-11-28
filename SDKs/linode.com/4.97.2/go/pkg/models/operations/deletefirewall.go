package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteFirewallServerList = []string{
	"https://api.linode.com/v4",
}

type DeleteFirewallPathParams struct {
	FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
}

type DeleteFirewallSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteFirewallDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteFirewallRequest struct {
	ServerURL  *string
	PathParams DeleteFirewallPathParams
	Security   DeleteFirewallSecurity
}

type DeleteFirewallResponse struct {
	ContentType                                string
	StatusCode                                 int64
	DeleteFirewall200ApplicationJSONObject     map[string]interface{}
	DeleteFirewallDefaultApplicationJSONObject *DeleteFirewallDefaultApplicationJSON
}
