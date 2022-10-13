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

type FirewallRules struct {
	Inbound        []FirewallRuleConfig             `json:"inbound"`
	InboundPolicy  *FirewallRulesInboundPolicyEnum  `json:"inbound_policy"`
	Outbound       []FirewallRuleConfig             `json:"outbound"`
	OutboundPolicy *FirewallRulesOutboundPolicyEnum `json:"outbound_policy"`
}

type FirewallStatusEnum string

const (
	FirewallStatusEnumEnabled  FirewallStatusEnum = "enabled"
	FirewallStatusEnumDisabled FirewallStatusEnum = "disabled"
	FirewallStatusEnumDeleted  FirewallStatusEnum = "deleted"
)

type Firewall struct {
	Created *time.Time          `json:"created"`
	ID      *int64              `json:"id"`
	Label   *string             `json:"label"`
	Rules   *FirewallRules      `json:"rules"`
	Status  *FirewallStatusEnum `json:"status"`
	Tags    []string            `json:"tags"`
	Updated *time.Time          `json:"updated"`
}
