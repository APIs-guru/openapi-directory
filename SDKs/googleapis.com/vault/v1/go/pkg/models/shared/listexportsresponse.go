package shared

// ListExportsResponse
// The exports for a matter.
type ListExportsResponse struct {
	Exports       []Export `json:"exports,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
