package shared

type ListAvailableOrgPolicyConstraintsResponse struct {
	Constraints   []Constraint `json:"constraints"`
	NextPageToken *string      `json:"nextPageToken"`
}
