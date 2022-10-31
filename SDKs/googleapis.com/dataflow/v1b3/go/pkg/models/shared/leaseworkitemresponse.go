package shared



type LeaseWorkItemResponse struct {
    UnifiedWorkerResponse map[string]interface{} `json:"unifiedWorkerResponse,omitempty"`
    WorkItems []WorkItem `json:"workItems,omitempty"`
    
}

