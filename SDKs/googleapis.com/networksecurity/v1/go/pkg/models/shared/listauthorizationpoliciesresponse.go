package shared

type ListAuthorizationPoliciesResponse struct {
	AuthorizationPolicies []AuthorizationPolicy `json:"authorizationPolicies,omitempty"`
	NextPageToken         *string               `json:"nextPageToken,omitempty"`
}
