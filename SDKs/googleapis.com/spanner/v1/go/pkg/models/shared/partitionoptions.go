package shared



type PartitionOptions struct {
    MaxPartitions *string `json:"maxPartitions,omitempty"`
    PartitionSizeBytes *string `json:"partitionSizeBytes,omitempty"`
    
}

