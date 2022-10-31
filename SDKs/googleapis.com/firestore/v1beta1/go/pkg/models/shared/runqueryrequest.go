package shared



type RunQueryRequest struct {
    NewTransaction *TransactionOptions `json:"newTransaction,omitempty"`
    ReadTime *string `json:"readTime,omitempty"`
    StructuredQuery *StructuredQuery `json:"structuredQuery,omitempty"`
    Transaction *string `json:"transaction,omitempty"`
    
}

