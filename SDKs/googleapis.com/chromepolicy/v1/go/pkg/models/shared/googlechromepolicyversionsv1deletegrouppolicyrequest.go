package shared

// GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest
// Request parameters for deleting the policy value of a specific group target.
type GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest struct {
	PolicySchema    *string                                      `json:"policySchema,omitempty"`
	PolicyTargetKey *GoogleChromePolicyVersionsV1PolicyTargetKey `json:"policyTargetKey,omitempty"`
}
