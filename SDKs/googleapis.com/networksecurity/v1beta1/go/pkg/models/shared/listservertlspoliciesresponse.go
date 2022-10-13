package shared

type ListServerTLSPoliciesResponse struct {
	NextPageToken     *string           `json:"nextPageToken"`
	ServerTLSPolicies []ServerTLSPolicy `json:"serverTlsPolicies"`
}
