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

type Rules struct {
	Inbound        []FirewallRuleConfig     `json:"inbound"`
	InboundPolicy  *RulesInboundPolicyEnum  `json:"inbound_policy"`
	Outbound       []FirewallRuleConfig     `json:"outbound"`
	OutboundPolicy *RulesOutboundPolicyEnum `json:"outbound_policy"`
}
