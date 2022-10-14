package shared

type GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest struct {
	PolicyTargetKey *GoogleChromePolicyVersionsV1PolicyTargetKey `json:"policyTargetKey,omitempty"`
	PolicyValue     *GoogleChromePolicyVersionsV1PolicyValue     `json:"policyValue,omitempty"`
	UpdateMask      *string                                      `json:"updateMask,omitempty"`
}
