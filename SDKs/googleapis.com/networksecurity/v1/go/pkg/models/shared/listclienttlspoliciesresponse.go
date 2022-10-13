package shared

type ListClientTLSPoliciesResponse struct {
	ClientTLSPolicies []ClientTLSPolicy `json:"clientTlsPolicies"`
	NextPageToken     *string           `json:"nextPageToken"`
}
