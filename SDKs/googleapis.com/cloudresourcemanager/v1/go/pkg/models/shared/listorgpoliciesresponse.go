package shared

type ListOrgPoliciesResponse struct {
	NextPageToken *string     `json:"nextPageToken"`
	Policies      []OrgPolicy `json:"policies"`
}
