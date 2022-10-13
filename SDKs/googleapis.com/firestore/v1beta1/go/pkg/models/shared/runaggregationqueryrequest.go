package shared

type RunAggregationQueryRequest struct {
	NewTransaction             *TransactionOptions         `json:"newTransaction"`
	ReadTime                   *string                     `json:"readTime"`
	StructuredAggregationQuery *StructuredAggregationQuery `json:"structuredAggregationQuery"`
	Transaction                *string                     `json:"transaction"`
}
