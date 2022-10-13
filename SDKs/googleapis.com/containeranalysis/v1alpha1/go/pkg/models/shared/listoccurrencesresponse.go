package shared

type ListOccurrencesResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	Occurrences   []Occurrence `json:"occurrences"`
}
