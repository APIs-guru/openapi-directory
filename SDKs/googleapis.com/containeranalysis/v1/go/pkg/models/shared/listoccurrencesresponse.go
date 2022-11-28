package shared

// ListOccurrencesResponse
// Response for listing occurrences.
type ListOccurrencesResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Occurrences   []Occurrence `json:"occurrences,omitempty"`
}
