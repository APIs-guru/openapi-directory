package shared

type ResponsePolicyRuleBehaviorEnum string

const (
	ResponsePolicyRuleBehaviorEnumBehaviorUnspecified  ResponsePolicyRuleBehaviorEnum = "behaviorUnspecified"
	ResponsePolicyRuleBehaviorEnumBypassResponsePolicy ResponsePolicyRuleBehaviorEnum = "bypassResponsePolicy"
)

// ResponsePolicyRule
// A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.
type ResponsePolicyRule struct {
	Behavior  *ResponsePolicyRuleBehaviorEnum `json:"behavior,omitempty"`
	DNSName   *string                         `json:"dnsName,omitempty"`
	Kind      *string                         `json:"kind,omitempty"`
	LocalData *ResponsePolicyRuleLocalData    `json:"localData,omitempty"`
	RuleName  *string                         `json:"ruleName,omitempty"`
}
