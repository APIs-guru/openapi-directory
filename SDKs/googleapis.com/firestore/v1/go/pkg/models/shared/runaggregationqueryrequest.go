package shared



type RunAggregationQueryRequest struct {
    NewTransaction *TransactionOptions `json:"newTransaction,omitempty"`
    ReadTime *string `json:"readTime,omitempty"`
    StructuredAggregationQuery *StructuredAggregationQuery `json:"structuredAggregationQuery,omitempty"`
    Transaction *string `json:"transaction,omitempty"`
    
}

