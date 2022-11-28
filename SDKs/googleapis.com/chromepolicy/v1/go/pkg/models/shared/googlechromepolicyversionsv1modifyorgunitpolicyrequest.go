package shared

// GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest
// Request parameters for modifying a policy value for a specific org unit target.
type GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest struct {
	PolicyTargetKey *GoogleChromePolicyVersionsV1PolicyTargetKey `json:"policyTargetKey,omitempty"`
	PolicyValue     *GoogleChromePolicyVersionsV1PolicyValue     `json:"policyValue,omitempty"`
	UpdateMask      *string                                      `json:"updateMask,omitempty"`
}
