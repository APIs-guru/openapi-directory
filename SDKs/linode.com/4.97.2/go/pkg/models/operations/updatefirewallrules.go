package operations

import (
"openapi/pkg/models/shared")
var UpdateFirewallRulesServers = []string{
	"https://api.linode.com/v4",
}

type UpdateFirewallRulesPathParams struct {
    FirewallID int64 `pathParam:"style=simple,explode=false,name=firewallId"`
    
}

type UpdateFirewallRulesSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateFirewallRulesSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UpdateFirewallRulesSecurity struct {
    Option1 *UpdateFirewallRulesSecurityOption1 `security:"option"`
    Option2 *UpdateFirewallRulesSecurityOption2 `security:"option"`
    
}

type UpdateFirewallRulesRequest struct {
    ServerURL *string 
    PathParams UpdateFirewallRulesPathParams 
    Request *shared.Rules `request:"mediaType=application/json"`
    Security UpdateFirewallRulesSecurity 
    
}

type UpdateFirewallRulesDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type UpdateFirewallRulesResponse struct {
    ContentType string 
    StatusCode int64 
    Rules *shared.Rules 
    UpdateFirewallRulesDefaultApplicationJSONObject *UpdateFirewallRulesDefaultApplicationJSON 
    
}

