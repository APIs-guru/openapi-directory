package shared



type Key struct {
    PartitionID *PartitionID `json:"partitionId,omitempty"`
    Path []PathElement `json:"path,omitempty"`
    
}

