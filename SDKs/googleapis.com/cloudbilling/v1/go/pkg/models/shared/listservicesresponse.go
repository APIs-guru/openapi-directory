package shared

// ListServicesResponse
// Response message for `ListServices`.
type ListServicesResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Services      []Service `json:"services,omitempty"`
}
