package shared

// GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest
// Request message for modifying multiple policy values for a specific target.
type GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest struct {
	Requests []GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest `json:"requests,omitempty"`
}
