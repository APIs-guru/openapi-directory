package operations

import (
	"openapi/pkg/models/shared"
)

var GetFirewallRulesServers = []string{
	"https://api.linode.com/v4",
}

type GetFirewallRulesPathParams struct {
	FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
}

type GetFirewallRulesSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetFirewallRulesSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetFirewallRulesSecurity struct {
	Option1 *GetFirewallRulesSecurityOption1 `security:"option"`
	Option2 *GetFirewallRulesSecurityOption2 `security:"option"`
}

type GetFirewallRulesRequest struct {
	ServerURL  *string
	PathParams GetFirewallRulesPathParams
	Security   GetFirewallRulesSecurity
}

type GetFirewallRulesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetFirewallRulesResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetFirewallRulesDefaultApplicationJSONObject *GetFirewallRulesDefaultApplicationJSON
	Rules                                        *shared.Rules
}
