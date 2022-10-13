package shared

type ResponsePolicyRuleBehaviorEnum string

const (
	ResponsePolicyRuleBehaviorEnumBehaviorUnspecified  ResponsePolicyRuleBehaviorEnum = "behaviorUnspecified"
	ResponsePolicyRuleBehaviorEnumBypassResponsePolicy ResponsePolicyRuleBehaviorEnum = "bypassResponsePolicy"
)

type ResponsePolicyRule struct {
	Behavior  *ResponsePolicyRuleBehaviorEnum `json:"behavior"`
	DNSName   *string                         `json:"dnsName"`
	Kind      *string                         `json:"kind"`
	LocalData *ResponsePolicyRuleLocalData    `json:"localData"`
	RuleName  *string                         `json:"ruleName"`
}
