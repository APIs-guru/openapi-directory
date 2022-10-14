package shared

type ListDiagnosticsResponse struct {
	Diagnostics   []Diagnostics `json:"diagnostics,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
