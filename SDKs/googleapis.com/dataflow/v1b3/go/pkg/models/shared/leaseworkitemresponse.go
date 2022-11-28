package shared

// LeaseWorkItemResponse
// Response to a request to lease WorkItems.
type LeaseWorkItemResponse struct {
	UnifiedWorkerResponse map[string]interface{} `json:"unifiedWorkerResponse,omitempty"`
	WorkItems             []WorkItem             `json:"workItems,omitempty"`
}
