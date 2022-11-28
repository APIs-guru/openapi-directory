package shared

// BatchCreateOccurrencesRequestInput
// Request to create occurrences in batch.
type BatchCreateOccurrencesRequestInput struct {
	Occurrences []OccurrenceInput `json:"occurrences,omitempty"`
}
