package shared

type SchedulerResource struct {
	Count     *int32   `json:"count,omitempty"`
	CPU       *float32 `json:"cpu,omitempty"`
	MemoryGb  *float32 `json:"memoryGb,omitempty"`
	StorageGb *float32 `json:"storageGb,omitempty"`
}
