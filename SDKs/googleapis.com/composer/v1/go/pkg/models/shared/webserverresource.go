package shared



type WebServerResource struct {
    CPU *float32 `json:"cpu,omitempty"`
    MemoryGb *float32 `json:"memoryGb,omitempty"`
    StorageGb *float32 `json:"storageGb,omitempty"`
    
}

