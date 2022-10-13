package shared

type LeaseWorkItemResponse struct {
	UnifiedWorkerResponse map[string]interface{} `json:"unifiedWorkerResponse"`
	WorkItems             []WorkItem             `json:"workItems"`
}
