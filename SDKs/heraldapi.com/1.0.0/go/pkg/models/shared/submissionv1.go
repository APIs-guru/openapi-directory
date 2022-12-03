package shared

// SubmissionV1
// A submission is a set of information submitted by a producer to institutions in order to get quotes.
type SubmissionV1 struct {
	Application   ApplicationWriteV1 `json:"application"`
	ID            string             `json:"id"`
	ProducerID    string             `json:"producer_id"`
	QuotePreviews []QuotePreviewV1   `json:"quote_previews"`
}
