package shared

// ListAvailableOrgPolicyConstraintsResponse
// The response returned from the `ListAvailableOrgPolicyConstraints` method. Returns all `Constraints` that could be set at this level of the hierarchy (contrast with the response from `ListPolicies`, which returns all policies which are set).
type ListAvailableOrgPolicyConstraintsResponse struct {
	Constraints   []Constraint `json:"constraints,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
