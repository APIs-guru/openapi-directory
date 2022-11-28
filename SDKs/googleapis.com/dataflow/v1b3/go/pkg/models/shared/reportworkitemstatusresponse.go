package shared

// ReportWorkItemStatusResponse
// Response from a request to report the status of WorkItems.
type ReportWorkItemStatusResponse struct {
	UnifiedWorkerResponse map[string]interface{} `json:"unifiedWorkerResponse,omitempty"`
	WorkItemServiceStates []WorkItemServiceState `json:"workItemServiceStates,omitempty"`
}
