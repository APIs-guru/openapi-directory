package shared

// RunAggregationQueryRequest
// The request for Firestore.RunAggregationQuery.
type RunAggregationQueryRequest struct {
	NewTransaction             *TransactionOptions         `json:"newTransaction,omitempty"`
	ReadTime                   *string                     `json:"readTime,omitempty"`
	StructuredAggregationQuery *StructuredAggregationQuery `json:"structuredAggregationQuery,omitempty"`
	Transaction                *string                     `json:"transaction,omitempty"`
}
