package shared

type WebServerResource struct {
	CPU       *float32 `json:"cpu"`
	MemoryGb  *float32 `json:"memoryGb"`
	StorageGb *float32 `json:"storageGb"`
}
