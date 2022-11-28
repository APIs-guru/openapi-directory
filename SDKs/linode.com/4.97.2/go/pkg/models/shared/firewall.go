package shared

import (
	"time"
)

type FirewallRulesInboundPolicyEnum string

const (
	FirewallRulesInboundPolicyEnumAccept FirewallRulesInboundPolicyEnum = "ACCEPT"
	FirewallRulesInboundPolicyEnumDrop   FirewallRulesInboundPolicyEnum = "DROP"
)

type FirewallRulesOutboundPolicyEnum string

const (
	FirewallRulesOutboundPolicyEnumAccept FirewallRulesOutboundPolicyEnum = "ACCEPT"
	FirewallRulesOutboundPolicyEnumDrop   FirewallRulesOutboundPolicyEnum = "DROP"
)

// FirewallRules
// The inbound and outbound access rules to apply to the Firewall.
//
// A Firewall may have up to 25 rules across its inbound and outbound rulesets.
type FirewallRules struct {
	Inbound        []FirewallRuleConfig             `json:"inbound,omitempty"`
	InboundPolicy  *FirewallRulesInboundPolicyEnum  `json:"inbound_policy,omitempty"`
	Outbound       []FirewallRuleConfig             `json:"outbound,omitempty"`
	OutboundPolicy *FirewallRulesOutboundPolicyEnum `json:"outbound_policy,omitempty"`
}

type FirewallStatusEnum string

const (
	FirewallStatusEnumEnabled  FirewallStatusEnum = "enabled"
	FirewallStatusEnumDisabled FirewallStatusEnum = "disabled"
	FirewallStatusEnumDeleted  FirewallStatusEnum = "deleted"
)

// Firewall
// A resource that controls incoming and outgoing network traffic to a Linode service. Only one Firewall can be attached to a Linode at any given time. [Create a Firewall Device](/docs/api/networking/#firewall-create) to assign a Firewall to a Linode service. Currently, Firewalls can only be assigned to Linode instances.
type Firewall struct {
	Created *time.Time          `json:"created,omitempty"`
	ID      *int64              `json:"id,omitempty"`
	Label   *string             `json:"label,omitempty"`
	Rules   *FirewallRules      `json:"rules,omitempty"`
	Status  *FirewallStatusEnum `json:"status,omitempty"`
	Tags    []string            `json:"tags,omitempty"`
	Updated *time.Time          `json:"updated,omitempty"`
}
