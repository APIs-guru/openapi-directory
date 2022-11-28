package shared

// ListAuthorizationPoliciesResponse
// Response returned by the ListAuthorizationPolicies method.
type ListAuthorizationPoliciesResponse struct {
	AuthorizationPolicies []AuthorizationPolicy `json:"authorizationPolicies,omitempty"`
	NextPageToken         *string               `json:"nextPageToken,omitempty"`
}
