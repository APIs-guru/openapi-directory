package shared



type ListClientTLSPoliciesResponse struct {
    ClientTLSPolicies []ClientTLSPolicy `json:"clientTlsPolicies,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

