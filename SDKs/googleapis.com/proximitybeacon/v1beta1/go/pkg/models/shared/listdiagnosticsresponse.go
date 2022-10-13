package shared

type ListDiagnosticsResponse struct {
	Diagnostics   []Diagnostics `json:"diagnostics"`
	NextPageToken *string       `json:"nextPageToken"`
}
