package shared

type ListEndpointPoliciesResponse struct {
	EndpointPolicies []EndpointPolicy `json:"endpointPolicies,omitempty"`
	NextPageToken    *string          `json:"nextPageToken,omitempty"`
}
