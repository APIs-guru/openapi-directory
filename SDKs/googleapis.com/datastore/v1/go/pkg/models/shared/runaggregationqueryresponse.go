package shared

// RunAggregationQueryResponse
// The response for Datastore.RunAggregationQuery.
type RunAggregationQueryResponse struct {
	Batch *AggregationResultBatch `json:"batch,omitempty"`
	Query *AggregationQuery       `json:"query,omitempty"`
}
