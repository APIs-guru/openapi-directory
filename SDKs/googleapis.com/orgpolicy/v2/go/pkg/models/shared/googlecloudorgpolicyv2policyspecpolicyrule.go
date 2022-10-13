package shared

type GoogleCloudOrgpolicyV2PolicySpecPolicyRule struct {
	AllowAll  *bool                                                   `json:"allowAll"`
	Condition *GoogleTypeExpr                                         `json:"condition"`
	DenyAll   *bool                                                   `json:"denyAll"`
	Enforce   *bool                                                   `json:"enforce"`
	Values    *GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues `json:"values"`
}
