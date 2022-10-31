package shared

type GoogleCloudOrgpolicyV2PolicySpecPolicyRule struct {
	AllowAll  *bool                                                   `json:"allowAll,omitempty"`
	Condition *GoogleTypeExpr                                         `json:"condition,omitempty"`
	DenyAll   *bool                                                   `json:"denyAll,omitempty"`
	Enforce   *bool                                                   `json:"enforce,omitempty"`
	Values    *GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues `json:"values,omitempty"`
}
