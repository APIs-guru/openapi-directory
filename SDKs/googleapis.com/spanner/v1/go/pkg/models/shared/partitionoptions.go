package shared

// PartitionOptions
// Options for a PartitionQueryRequest and PartitionReadRequest.
type PartitionOptions struct {
	MaxPartitions      *string `json:"maxPartitions,omitempty"`
	PartitionSizeBytes *string `json:"partitionSizeBytes,omitempty"`
}
