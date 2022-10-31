package shared



type StructuredAggregationQuery struct {
    Aggregations []Aggregation `json:"aggregations,omitempty"`
    StructuredQuery *StructuredQuery `json:"structuredQuery,omitempty"`
    
}

