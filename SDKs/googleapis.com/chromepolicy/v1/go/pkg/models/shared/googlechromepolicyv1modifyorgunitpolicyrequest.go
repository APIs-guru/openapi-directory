package shared

type GoogleChromePolicyV1ModifyOrgUnitPolicyRequest struct {
	PolicyTargetKey *GoogleChromePolicyV1PolicyTargetKey `json:"policyTargetKey"`
	PolicyValue     *GoogleChromePolicyV1PolicyValue     `json:"policyValue"`
	UpdateMask      *string                              `json:"updateMask"`
}
