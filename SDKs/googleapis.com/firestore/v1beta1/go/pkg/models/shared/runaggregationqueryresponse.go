package shared

// RunAggregationQueryResponse
// The response for Firestore.RunAggregationQuery.
type RunAggregationQueryResponse struct {
	ReadTime    *string            `json:"readTime,omitempty"`
	Result      *AggregationResult `json:"result,omitempty"`
	Transaction *string            `json:"transaction,omitempty"`
}
