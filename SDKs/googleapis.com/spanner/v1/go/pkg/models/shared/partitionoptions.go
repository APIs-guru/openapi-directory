package shared

type PartitionOptions struct {
	MaxPartitions      *string `json:"maxPartitions"`
	PartitionSizeBytes *string `json:"partitionSizeBytes"`
}
