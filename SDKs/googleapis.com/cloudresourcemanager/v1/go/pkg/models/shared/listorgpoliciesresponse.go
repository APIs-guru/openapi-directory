package shared

type ListOrgPoliciesResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Policies      []OrgPolicy `json:"policies,omitempty"`
}
