package shared

type GoogleChromePolicyV1ModifyGroupPolicyRequest struct {
	PolicyTargetKey *GoogleChromePolicyV1PolicyTargetKey `json:"policyTargetKey"`
	PolicyValue     *GoogleChromePolicyV1PolicyValue     `json:"policyValue"`
	UpdateMask      *string                              `json:"updateMask"`
}
