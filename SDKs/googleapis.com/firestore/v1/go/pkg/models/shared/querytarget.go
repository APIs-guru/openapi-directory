package shared

type QueryTarget struct {
	Parent          *string          `json:"parent,omitempty"`
	StructuredQuery *StructuredQuery `json:"structuredQuery,omitempty"`
}
