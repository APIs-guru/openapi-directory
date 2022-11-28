package shared

// ListClientTLSPoliciesResponse
// Response returned by the ListClientTlsPolicies method.
type ListClientTLSPoliciesResponse struct {
	ClientTLSPolicies []ClientTLSPolicy `json:"clientTlsPolicies,omitempty"`
	NextPageToken     *string           `json:"nextPageToken,omitempty"`
}
