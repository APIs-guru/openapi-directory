package shared



type ReadRequest struct {
    Columns []string `json:"columns,omitempty"`
    Index *string `json:"index,omitempty"`
    KeySet *KeySet `json:"keySet,omitempty"`
    Limit *string `json:"limit,omitempty"`
    PartitionToken *string `json:"partitionToken,omitempty"`
    RequestOptions *RequestOptions `json:"requestOptions,omitempty"`
    ResumeToken *string `json:"resumeToken,omitempty"`
    Table *string `json:"table,omitempty"`
    Transaction *TransactionSelector `json:"transaction,omitempty"`
    
}

