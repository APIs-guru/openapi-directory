package shared

type ListAuthorizationPoliciesResponse struct {
	AuthorizationPolicies []AuthorizationPolicy `json:"authorizationPolicies"`
	NextPageToken         *string               `json:"nextPageToken"`
}
