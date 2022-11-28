package shared

// GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest
// Request parameters for modifying a policy value for a specific group target.
type GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest struct {
	PolicyTargetKey *GoogleChromePolicyVersionsV1PolicyTargetKey `json:"policyTargetKey,omitempty"`
	PolicyValue     *GoogleChromePolicyVersionsV1PolicyValue     `json:"policyValue,omitempty"`
	UpdateMask      *string                                      `json:"updateMask,omitempty"`
}
