package shared

// ListReportsResponse
// List reports response.
type ListReportsResponse struct {
	Kind          *string  `json:"kind,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Reports       []Report `json:"reports,omitempty"`
}
