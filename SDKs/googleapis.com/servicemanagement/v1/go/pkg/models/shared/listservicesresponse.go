package shared

// ListServicesResponse
// Response message for `ListServices` method.
type ListServicesResponse struct {
	NextPageToken *string          `json:"nextPageToken,omitempty"`
	Services      []ManagedService `json:"services,omitempty"`
}
