package shared

import (
"time")


type FirewallRulesInboundPolicyEnum string

const (
    FirewallRulesInboundPolicyEnumAccept FirewallRulesInboundPolicyEnum = "ACCEPT"
FirewallRulesInboundPolicyEnumDrop FirewallRulesInboundPolicyEnum = "DROP"
)



type FirewallRulesOutboundPolicyEnum string

const (
    FirewallRulesOutboundPolicyEnumAccept FirewallRulesOutboundPolicyEnum = "ACCEPT"
FirewallRulesOutboundPolicyEnumDrop FirewallRulesOutboundPolicyEnum = "DROP"
)


type FirewallRules struct {
    Inbound []FirewallRuleConfig `json:"inbound,omitempty"`
    InboundPolicy *FirewallRulesInboundPolicyEnum `json:"inbound_policy,omitempty"`
    Outbound []FirewallRuleConfig `json:"outbound,omitempty"`
    OutboundPolicy *FirewallRulesOutboundPolicyEnum `json:"outbound_policy,omitempty"`
    
}


type FirewallStatusEnum string

const (
    FirewallStatusEnumEnabled FirewallStatusEnum = "enabled"
FirewallStatusEnumDisabled FirewallStatusEnum = "disabled"
FirewallStatusEnumDeleted FirewallStatusEnum = "deleted"
)


type Firewall struct {
    Created *time.Time `json:"created,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Label *string `json:"label,omitempty"`
    Rules *FirewallRules `json:"rules,omitempty"`
    Status *FirewallStatusEnum `json:"status,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Updated *time.Time `json:"updated,omitempty"`
    
}

