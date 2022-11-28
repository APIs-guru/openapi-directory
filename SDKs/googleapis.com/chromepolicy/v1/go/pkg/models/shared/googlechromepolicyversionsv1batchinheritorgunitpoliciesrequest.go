package shared

// GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest
// Request message for specifying that multiple policy values inherit their value from their parents.
type GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest struct {
	Requests []GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest `json:"requests,omitempty"`
}
