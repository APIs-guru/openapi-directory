package shared

// ClearOrgPolicyRequest
// The request sent to the ClearOrgPolicy method.
type ClearOrgPolicyRequest struct {
	Constraint *string `json:"constraint,omitempty"`
	Etag       *string `json:"etag,omitempty"`
}
