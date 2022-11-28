package shared

// ListScansResponse
// Response method from the ListScans method.
type ListScansResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Scans         []Scan  `json:"scans,omitempty"`
}
