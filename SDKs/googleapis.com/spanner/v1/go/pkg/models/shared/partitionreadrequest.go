package shared

// PartitionReadRequest
// The request for PartitionRead
type PartitionReadRequest struct {
	Columns          []string             `json:"columns,omitempty"`
	Index            *string              `json:"index,omitempty"`
	KeySet           *KeySet              `json:"keySet,omitempty"`
	PartitionOptions *PartitionOptions    `json:"partitionOptions,omitempty"`
	Table            *string              `json:"table,omitempty"`
	Transaction      *TransactionSelector `json:"transaction,omitempty"`
}
