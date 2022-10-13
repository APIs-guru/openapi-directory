package shared

type StructuredAggregationQuery struct {
	Aggregations    []Aggregation    `json:"aggregations"`
	StructuredQuery *StructuredQuery `json:"structuredQuery"`
}
