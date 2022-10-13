package shared

type TransactionOptions struct {
	PartitionedDml map[string]interface{} `json:"partitionedDml"`
	ReadOnly       *ReadOnly              `json:"readOnly"`
	ReadWrite      *ReadWrite             `json:"readWrite"`
}
