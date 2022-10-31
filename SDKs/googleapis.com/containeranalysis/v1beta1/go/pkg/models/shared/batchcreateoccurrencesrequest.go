package shared

type BatchCreateOccurrencesRequest struct {
	Occurrences []Occurrence `json:"occurrences,omitempty"`
}
