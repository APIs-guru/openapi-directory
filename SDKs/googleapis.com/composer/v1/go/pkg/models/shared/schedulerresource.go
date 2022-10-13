package shared

type SchedulerResource struct {
	Count     *int32   `json:"count"`
	CPU       *float32 `json:"cpu"`
	MemoryGb  *float32 `json:"memoryGb"`
	StorageGb *float32 `json:"storageGb"`
}
