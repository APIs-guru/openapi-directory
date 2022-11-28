package shared

// PartitionResponse
// The response for PartitionQuery or PartitionRead
type PartitionResponse struct {
	Partitions  []Partition  `json:"partitions,omitempty"`
	Transaction *Transaction `json:"transaction,omitempty"`
}
