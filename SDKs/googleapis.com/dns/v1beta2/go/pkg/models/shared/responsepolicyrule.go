package shared

type ResponsePolicyRuleBehaviorEnum string

const (
	ResponsePolicyRuleBehaviorEnumBehaviorUnspecified  ResponsePolicyRuleBehaviorEnum = "behaviorUnspecified"
	ResponsePolicyRuleBehaviorEnumBypassResponsePolicy ResponsePolicyRuleBehaviorEnum = "bypassResponsePolicy"
)

type ResponsePolicyRule struct {
	Behavior  *ResponsePolicyRuleBehaviorEnum `json:"behavior,omitempty"`
	DNSName   *string                         `json:"dnsName,omitempty"`
	Kind      *string                         `json:"kind,omitempty"`
	LocalData *ResponsePolicyRuleLocalData    `json:"localData,omitempty"`
	RuleName  *string                         `json:"ruleName,omitempty"`
}
