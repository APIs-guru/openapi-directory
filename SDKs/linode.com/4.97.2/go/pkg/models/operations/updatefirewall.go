package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateFirewallServerList = []string{
	"https://api.linode.com/v4",
}

type UpdateFirewallPathParams struct {
	FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
}

type UpdateFirewallRequestBodyInput struct {
	Label *string  `json:"label,omitempty"`
	Tags  []string `json:"tags,omitempty"`
}

type UpdateFirewallSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateFirewallDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateFirewallRequest struct {
	ServerURL  *string
	PathParams UpdateFirewallPathParams
	Request    *UpdateFirewallRequestBodyInput `request:"mediaType=application/json"`
	Security   UpdateFirewallSecurity
}

type UpdateFirewallResponse struct {
	ContentType                                string
	Firewall                                   *shared.Firewall
	StatusCode                                 int64
	UpdateFirewallDefaultApplicationJSONObject *UpdateFirewallDefaultApplicationJSON
}
