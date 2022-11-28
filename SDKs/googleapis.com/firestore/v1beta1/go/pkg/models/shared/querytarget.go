package shared

// QueryTarget
// A target specified by a query.
type QueryTarget struct {
	Parent          *string          `json:"parent,omitempty"`
	StructuredQuery *StructuredQuery `json:"structuredQuery,omitempty"`
}
