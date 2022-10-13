package shared

type QueryTarget struct {
	Parent          *string          `json:"parent"`
	StructuredQuery *StructuredQuery `json:"structuredQuery"`
}
