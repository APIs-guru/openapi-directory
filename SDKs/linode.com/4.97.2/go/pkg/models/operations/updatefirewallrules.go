package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateFirewallRulesServerList = []string{
	"https://api.linode.com/v4",
}

type UpdateFirewallRulesPathParams struct {
	FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
}

type UpdateFirewallRulesSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateFirewallRulesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateFirewallRulesRequest struct {
	ServerURL  *string
	PathParams UpdateFirewallRulesPathParams
	Request    *shared.Rules `request:"mediaType=application/json"`
	Security   UpdateFirewallRulesSecurity
}

type UpdateFirewallRulesResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	Rules                                           *shared.Rules
	UpdateFirewallRulesDefaultApplicationJSONObject *UpdateFirewallRulesDefaultApplicationJSON
}
