package operations

import (
	"openapi/pkg/models/shared"
)

var CreateFirewallsServerList = []string{
	"https://api.linode.com/v4",
}

// CreateFirewallsRequestBodyDevices
// Devices to create for this Firewall.
// When a Device is created, the Firewall is assigned to its associated service.
// Currently, Devices can only be created for Linode instances.
type CreateFirewallsRequestBodyDevices struct {
	Linodes []int64 `json:"linodes,omitempty"`
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

// CreateFirewallsRequestBodyRules
// The inbound and outbound access rules to apply to the Firewall.
//
// A Firewall may have up to 25 rules across its inbound and outbound rulesets.
type CreateFirewallsRequestBodyRules struct {
	Inbound        []shared.FirewallRuleConfig                        `json:"inbound,omitempty"`
	InboundPolicy  *CreateFirewallsRequestBodyRulesInboundPolicyEnum  `json:"inbound_policy,omitempty"`
	Outbound       []shared.FirewallRuleConfig                        `json:"outbound,omitempty"`
	OutboundPolicy *CreateFirewallsRequestBodyRulesOutboundPolicyEnum `json:"outbound_policy,omitempty"`
}

type CreateFirewallsRequestBodyInput struct {
	Devices *CreateFirewallsRequestBodyDevices `json:"devices,omitempty"`
	Label   string                             `json:"label"`
	Rules   CreateFirewallsRequestBodyRules    `json:"rules"`
	Tags    []string                           `json:"tags,omitempty"`
}

type CreateFirewallsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateFirewallsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateFirewallsRequest struct {
	ServerURL *string
	Request   *CreateFirewallsRequestBodyInput `request:"mediaType=application/json"`
	Security  CreateFirewallsSecurity
}

type CreateFirewallsResponse struct {
	ContentType                                 string
	Firewall                                    *shared.Firewall
	StatusCode                                  int64
	CreateFirewallsDefaultApplicationJSONObject *CreateFirewallsDefaultApplicationJSON
}
