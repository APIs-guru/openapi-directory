package shared

// StructuredAggregationQuery
// Firestore query for running an aggregation over a StructuredQuery.
type StructuredAggregationQuery struct {
	Aggregations    []Aggregation    `json:"aggregations,omitempty"`
	StructuredQuery *StructuredQuery `json:"structuredQuery,omitempty"`
}
