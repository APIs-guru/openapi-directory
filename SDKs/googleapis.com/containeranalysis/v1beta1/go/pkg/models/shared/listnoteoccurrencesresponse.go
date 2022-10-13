package shared

type ListNoteOccurrencesResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	Occurrences   []Occurrence `json:"occurrences"`
}
