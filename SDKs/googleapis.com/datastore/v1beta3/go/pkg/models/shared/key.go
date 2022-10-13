package shared

type Key struct {
	PartitionID *PartitionID  `json:"partitionId"`
	Path        []PathElement `json:"path"`
}
