package shared

type RunQueryResponse struct {
	Document       *Document `json:"document"`
	Done           *bool     `json:"done"`
	ReadTime       *string   `json:"readTime"`
	SkippedResults *int32    `json:"skippedResults"`
	Transaction    *string   `json:"transaction"`
}
