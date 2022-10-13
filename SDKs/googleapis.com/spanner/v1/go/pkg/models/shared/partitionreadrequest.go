package shared

type PartitionReadRequest struct {
	Columns          []string             `json:"columns"`
	Index            *string              `json:"index"`
	KeySet           *KeySet              `json:"keySet"`
	PartitionOptions *PartitionOptions    `json:"partitionOptions"`
	Table            *string              `json:"table"`
	Transaction      *TransactionSelector `json:"transaction"`
}
