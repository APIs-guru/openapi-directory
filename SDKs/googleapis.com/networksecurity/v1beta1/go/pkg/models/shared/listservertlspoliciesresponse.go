package shared

type ListServerTLSPoliciesResponse struct {
	NextPageToken     *string           `json:"nextPageToken,omitempty"`
	ServerTLSPolicies []ServerTLSPolicy `json:"serverTlsPolicies,omitempty"`
}
