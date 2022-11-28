package shared

// AggregationQuery
// Datastore query for running an aggregation over a Query.
type AggregationQuery struct {
	Aggregations []Aggregation `json:"aggregations,omitempty"`
	NestedQuery  *Query        `json:"nestedQuery,omitempty"`
}
