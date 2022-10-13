package shared

type ReportWorkItemStatusResponse struct {
	UnifiedWorkerResponse map[string]interface{} `json:"unifiedWorkerResponse"`
	WorkItemServiceStates []WorkItemServiceState `json:"workItemServiceStates"`
}
