package shared




type ResponsePolicyRuleBehaviorEnum string

const (
    ResponsePolicyRuleBehaviorEnumBehaviorUnspecified ResponsePolicyRuleBehaviorEnum = "BEHAVIOR_UNSPECIFIED"
ResponsePolicyRuleBehaviorEnumBypassResponsePolicy ResponsePolicyRuleBehaviorEnum = "BYPASS_RESPONSE_POLICY"
)


type ResponsePolicyRule struct {
    Behavior *ResponsePolicyRuleBehaviorEnum `json:"behavior,omitempty"`
    DNSName *string `json:"dnsName,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LocalData *ResponsePolicyRuleLocalData `json:"localData,omitempty"`
    RuleName *string `json:"ruleName,omitempty"`
    
}

