package shared

// SetOrgPolicyRequest
// The request sent to the SetOrgPolicyRequest method.
type SetOrgPolicyRequest struct {
	Policy *OrgPolicy `json:"policy,omitempty"`
}
