package shared

// AggregationResult
// The result of a single bucket from a Firestore aggregation query. The keys of `aggregate_fields` are the same for all results in an aggregation query, unlike document queries which can have different fields present for each result.
type AggregationResult struct {
	AggregateFields map[string]Value `json:"aggregateFields,omitempty"`
}
