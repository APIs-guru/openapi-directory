package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var CreateFirewallsServers = []string{
	"https://api.linode.com/v4",
}

type CreateFirewallsRequestBodyDevices struct {
	Linodes []int64 `json:"linodes"`
}

type CreateFirewallsRequestBodyRulesInboundPolicyEnum string

const (
	CreateFirewallsRequestBodyRulesInboundPolicyEnumAccept CreateFirewallsRequestBodyRulesInboundPolicyEnum = "ACCEPT"
	CreateFirewallsRequestBodyRulesInboundPolicyEnumDrop   CreateFirewallsRequestBodyRulesInboundPolicyEnum = "DROP"
)

type CreateFirewallsRequestBodyRulesOutboundPolicyEnum string

const (
	CreateFirewallsRequestBodyRulesOutboundPolicyEnumAccept CreateFirewallsRequestBodyRulesOutboundPolicyEnum = "ACCEPT"
	CreateFirewallsRequestBodyRulesOutboundPolicyEnumDrop   CreateFirewallsRequestBodyRulesOutboundPolicyEnum = "DROP"
)

type CreateFirewallsRequestBodyRules struct {
	Inbound        []shared.FirewallRuleConfig                        `json:"inbound"`
	InboundPolicy  *CreateFirewallsRequestBodyRulesInboundPolicyEnum  `json:"inbound_policy"`
	Outbound       []shared.FirewallRuleConfig                        `json:"outbound"`
	OutboundPolicy *CreateFirewallsRequestBodyRulesOutboundPolicyEnum `json:"outbound_policy"`
}

type CreateFirewallsRequestBodyStatusEnum string

const (
	CreateFirewallsRequestBodyStatusEnumEnabled  CreateFirewallsRequestBodyStatusEnum = "enabled"
	CreateFirewallsRequestBodyStatusEnumDisabled CreateFirewallsRequestBodyStatusEnum = "disabled"
	CreateFirewallsRequestBodyStatusEnumDeleted  CreateFirewallsRequestBodyStatusEnum = "deleted"
)

type CreateFirewallsRequestBody struct {
	Created *time.Time                            `json:"created"`
	Devices *CreateFirewallsRequestBodyDevices    `json:"devices"`
	ID      *int64                                `json:"id"`
	Label   string                                `json:"label"`
	Rules   CreateFirewallsRequestBodyRules       `json:"rules"`
	Status  *CreateFirewallsRequestBodyStatusEnum `json:"status"`
	Tags    []string                              `json:"tags"`
	Updated *time.Time                            `json:"updated"`
}

type CreateFirewallsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateFirewallsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateFirewallsSecurity struct {
	Option1 *CreateFirewallsSecurityOption1 `security:"option"`
	Option2 *CreateFirewallsSecurityOption2 `security:"option"`
}

type CreateFirewallsRequest struct {
	ServerURL *string
	Request   *CreateFirewallsRequestBody `request:"mediaType=application/json"`
	Security  CreateFirewallsSecurity
}

type CreateFirewallsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type CreateFirewallsResponse struct {
	ContentType                                 string
	Firewall                                    *shared.Firewall
	StatusCode                                  int64
	CreateFirewallsDefaultApplicationJSONObject *CreateFirewallsDefaultApplicationJSON
}
