package shared

// ListEndpointsResponse
// A response containing bidder endpoints.
type ListEndpointsResponse struct {
	Endpoints     []Endpoint `json:"endpoints,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
