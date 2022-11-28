package shared

// GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest
// Request parameters for inheriting policy value of a specific org unit target from the policy value of its parent org unit.
type GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest struct {
	PolicySchema    *string                                      `json:"policySchema,omitempty"`
	PolicyTargetKey *GoogleChromePolicyVersionsV1PolicyTargetKey `json:"policyTargetKey,omitempty"`
}
