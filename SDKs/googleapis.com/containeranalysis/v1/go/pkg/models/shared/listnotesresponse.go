package shared

// ListNotesResponse
// Response for listing notes.
type ListNotesResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Notes         []Note  `json:"notes,omitempty"`
}
