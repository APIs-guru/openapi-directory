package shared

type ResponsePolicyRuleBehaviorEnum string

const (
	ResponsePolicyRuleBehaviorEnumBehaviorUnspecified  ResponsePolicyRuleBehaviorEnum = "BEHAVIOR_UNSPECIFIED"
	ResponsePolicyRuleBehaviorEnumBypassResponsePolicy ResponsePolicyRuleBehaviorEnum = "BYPASS_RESPONSE_POLICY"
)

type ResponsePolicyRule struct {
	Behavior  *ResponsePolicyRuleBehaviorEnum `json:"behavior"`
	DNSName   *string                         `json:"dnsName"`
	Kind      *string                         `json:"kind"`
	LocalData *ResponsePolicyRuleLocalData    `json:"localData"`
	RuleName  *string                         `json:"ruleName"`
}
