package shared

// BatchCreateOccurrencesResponse
// Response for creating occurrences in batch.
type BatchCreateOccurrencesResponse struct {
	Occurrences []Occurrence `json:"occurrences,omitempty"`
}
