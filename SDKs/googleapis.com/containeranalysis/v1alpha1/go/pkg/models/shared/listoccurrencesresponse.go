package shared

// ListOccurrencesResponse
// Response including listed active occurrences.
type ListOccurrencesResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Occurrences   []Occurrence `json:"occurrences,omitempty"`
}
