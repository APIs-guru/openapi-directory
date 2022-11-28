package shared

// ListEndpointsResponse
// The response message for RegistrationService.ListEndpoints.
type ListEndpointsResponse struct {
	Endpoints     []Endpoint `json:"endpoints,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
