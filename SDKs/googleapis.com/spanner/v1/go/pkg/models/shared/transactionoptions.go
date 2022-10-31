package shared



type TransactionOptions struct {
    PartitionedDml map[string]interface{} `json:"partitionedDml,omitempty"`
    ReadOnly *ReadOnly `json:"readOnly,omitempty"`
    ReadWrite *ReadWrite `json:"readWrite,omitempty"`
    
}

