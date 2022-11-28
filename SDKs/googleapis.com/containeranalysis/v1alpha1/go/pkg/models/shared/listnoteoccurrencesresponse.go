package shared

// ListNoteOccurrencesResponse
// Response including listed occurrences for a note.
type ListNoteOccurrencesResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Occurrences   []Occurrence `json:"occurrences,omitempty"`
}
