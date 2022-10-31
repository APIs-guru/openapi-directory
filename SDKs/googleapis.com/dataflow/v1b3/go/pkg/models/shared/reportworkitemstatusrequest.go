package shared

type ReportWorkItemStatusRequest struct {
	CurrentWorkerTime    *string                `json:"currentWorkerTime,omitempty"`
	Location             *string                `json:"location,omitempty"`
	UnifiedWorkerRequest map[string]interface{} `json:"unifiedWorkerRequest,omitempty"`
	WorkItemStatuses     []WorkItemStatus       `json:"workItemStatuses,omitempty"`
	WorkerID             *string                `json:"workerId,omitempty"`
}
