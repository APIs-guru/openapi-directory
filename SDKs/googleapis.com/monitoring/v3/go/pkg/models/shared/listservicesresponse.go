package shared

// ListServicesResponse
// The ListServices response.
type ListServicesResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Services      []Service `json:"services,omitempty"`
}
