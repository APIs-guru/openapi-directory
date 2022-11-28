package shared

type RulesInboundPolicyEnum string

const (
	RulesInboundPolicyEnumAccept RulesInboundPolicyEnum = "ACCEPT"
	RulesInboundPolicyEnumDrop   RulesInboundPolicyEnum = "DROP"
)

type RulesOutboundPolicyEnum string

const (
	RulesOutboundPolicyEnumAccept RulesOutboundPolicyEnum = "ACCEPT"
	RulesOutboundPolicyEnumDrop   RulesOutboundPolicyEnum = "DROP"
)

// Rules
// The inbound and outbound access rules to apply to the Firewall.
//
// A Firewall may have up to 25 rules across its inbound and outbound rulesets.
type Rules struct {
	Inbound        []FirewallRuleConfig     `json:"inbound,omitempty"`
	InboundPolicy  *RulesInboundPolicyEnum  `json:"inbound_policy,omitempty"`
	Outbound       []FirewallRuleConfig     `json:"outbound,omitempty"`
	OutboundPolicy *RulesOutboundPolicyEnum `json:"outbound_policy,omitempty"`
}
