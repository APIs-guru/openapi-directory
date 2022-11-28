package shared

// ListNoteOccurrencesResponse
// Response for listing occurrences for a note.
type ListNoteOccurrencesResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Occurrences   []Occurrence `json:"occurrences,omitempty"`
}
