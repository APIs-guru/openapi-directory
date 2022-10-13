package shared

type GoogleChromePolicyV1DeleteGroupPolicyRequest struct {
	PolicySchema    *string                              `json:"policySchema"`
	PolicyTargetKey *GoogleChromePolicyV1PolicyTargetKey `json:"policyTargetKey"`
}
