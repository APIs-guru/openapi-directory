package shared

// GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest
// Request message for specifying that multiple policy values will be deleted.
type GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest struct {
	Requests []GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest `json:"requests,omitempty"`
}
