package shared

type WorkerResource struct {
	CPU       *float32 `json:"cpu,omitempty"`
	MaxCount  *int32   `json:"maxCount,omitempty"`
	MemoryGb  *float32 `json:"memoryGb,omitempty"`
	MinCount  *int32   `json:"minCount,omitempty"`
	StorageGb *float32 `json:"storageGb,omitempty"`
}
