package shared

// ListOrgPoliciesResponse
// The response returned from the `ListOrgPolicies` method. It will be empty if no `Policies` are set on the resource.
type ListOrgPoliciesResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Policies      []OrgPolicy `json:"policies,omitempty"`
}
