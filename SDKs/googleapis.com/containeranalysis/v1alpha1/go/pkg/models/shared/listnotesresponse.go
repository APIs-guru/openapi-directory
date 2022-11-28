package shared

// ListNotesResponse
// Response including listed notes.
type ListNotesResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Notes         []Note  `json:"notes,omitempty"`
}
