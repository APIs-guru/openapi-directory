package shared

// RunQueryResponse
// The response for Firestore.RunQuery.
type RunQueryResponse struct {
	Document       *Document `json:"document,omitempty"`
	Done           *bool     `json:"done,omitempty"`
	ReadTime       *string   `json:"readTime,omitempty"`
	SkippedResults *int32    `json:"skippedResults,omitempty"`
	Transaction    *string   `json:"transaction,omitempty"`
}
