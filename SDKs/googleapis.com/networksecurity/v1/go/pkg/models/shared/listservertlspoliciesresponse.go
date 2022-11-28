package shared

// ListServerTLSPoliciesResponse
// Response returned by the ListServerTlsPolicies method.
type ListServerTLSPoliciesResponse struct {
	NextPageToken     *string           `json:"nextPageToken,omitempty"`
	ServerTLSPolicies []ServerTLSPolicy `json:"serverTlsPolicies,omitempty"`
}
