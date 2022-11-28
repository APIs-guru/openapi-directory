package operations

import (
	"openapi/pkg/models/shared"
)

var GetFirewallRulesServerList = []string{
	"https://api.linode.com/v4",
}

type GetFirewallRulesPathParams struct {
	FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
}

type GetFirewallRulesSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetFirewallRulesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetFirewallRulesRequest struct {
	ServerURL  *string
	PathParams GetFirewallRulesPathParams
	Security   GetFirewallRulesSecurity
}

type GetFirewallRulesResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetFirewallRulesDefaultApplicationJSONObject *GetFirewallRulesDefaultApplicationJSON
	Rules                                        *shared.Rules
}
