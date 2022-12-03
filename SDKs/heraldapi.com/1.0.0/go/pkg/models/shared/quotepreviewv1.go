package shared

// QuotePreviewV1
// A quote preview provides information about a quote within a submission.
type QuotePreviewV1 struct {
	ProductID string `json:"product_id"`
	QuoteID   string `json:"quote_id"`
}
