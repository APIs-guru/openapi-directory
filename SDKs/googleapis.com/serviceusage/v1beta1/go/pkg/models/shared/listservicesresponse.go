package shared

// ListServicesResponse
// Response message for the `ListServices` method.
type ListServicesResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Services      []Service `json:"services,omitempty"`
}
