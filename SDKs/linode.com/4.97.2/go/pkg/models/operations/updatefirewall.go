package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateFirewallServers = []string{
	"https://api.linode.com/v4",
}

type UpdateFirewallPathParams struct {
	FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
}

type UpdateFirewallRequestBody struct {
	Label  *string            `json:"label"`
	Status *shared.StatusEnum `json:"status"`
	Tags   []string           `json:"tags"`
}

type UpdateFirewallSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateFirewallSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateFirewallSecurity struct {
	Option1 *UpdateFirewallSecurityOption1 `security:"option"`
	Option2 *UpdateFirewallSecurityOption2 `security:"option"`
}

type UpdateFirewallRequest struct {
	ServerURL  *string
	PathParams UpdateFirewallPathParams
	Request    *UpdateFirewallRequestBody `request:"mediaType=application/json"`
	Security   UpdateFirewallSecurity
}

type UpdateFirewallDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type UpdateFirewallResponse struct {
	ContentType                                string
	Firewall                                   *shared.Firewall
	StatusCode                                 int64
	UpdateFirewallDefaultApplicationJSONObject *UpdateFirewallDefaultApplicationJSON
}
