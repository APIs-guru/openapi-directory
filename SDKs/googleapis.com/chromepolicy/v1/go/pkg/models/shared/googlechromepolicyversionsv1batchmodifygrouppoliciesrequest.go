package shared

// GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest
// Request message for modifying multiple policy values for a specific group-based target.
type GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest struct {
	Requests []GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest `json:"requests,omitempty"`
}
