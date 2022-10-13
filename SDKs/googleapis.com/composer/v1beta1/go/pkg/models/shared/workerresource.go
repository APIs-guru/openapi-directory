package shared

type WorkerResource struct {
	CPU       *float32 `json:"cpu"`
	MaxCount  *int32   `json:"maxCount"`
	MemoryGb  *float32 `json:"memoryGb"`
	MinCount  *int32   `json:"minCount"`
	StorageGb *float32 `json:"storageGb"`
}
