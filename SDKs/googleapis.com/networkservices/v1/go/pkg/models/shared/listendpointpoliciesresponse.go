package shared

type ListEndpointPoliciesResponse struct {
	EndpointPolicies []EndpointPolicy `json:"endpointPolicies"`
	NextPageToken    *string          `json:"nextPageToken"`
}
