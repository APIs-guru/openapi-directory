package shared

// ListDiagnosticsResponse
// Response that contains the requested diagnostics.
type ListDiagnosticsResponse struct {
	Diagnostics   []Diagnostics `json:"diagnostics,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
