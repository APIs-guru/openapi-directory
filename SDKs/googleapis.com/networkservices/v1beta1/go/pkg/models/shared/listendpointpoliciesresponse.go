package shared

// ListEndpointPoliciesResponse
// Response returned by the ListEndpointPolicies method.
type ListEndpointPoliciesResponse struct {
	EndpointPolicies []EndpointPolicy `json:"endpointPolicies,omitempty"`
	NextPageToken    *string          `json:"nextPageToken,omitempty"`
}
