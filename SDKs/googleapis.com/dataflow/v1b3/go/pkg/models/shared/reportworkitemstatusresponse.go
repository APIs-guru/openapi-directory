package shared



type ReportWorkItemStatusResponse struct {
    UnifiedWorkerResponse map[string]interface{} `json:"unifiedWorkerResponse,omitempty"`
    WorkItemServiceStates []WorkItemServiceState `json:"workItemServiceStates,omitempty"`
    
}

