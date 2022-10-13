package shared

type ReportWorkItemStatusRequest struct {
	CurrentWorkerTime    *string                `json:"currentWorkerTime"`
	Location             *string                `json:"location"`
	UnifiedWorkerRequest map[string]interface{} `json:"unifiedWorkerRequest"`
	WorkItemStatuses     []WorkItemStatus       `json:"workItemStatuses"`
	WorkerID             *string                `json:"workerId"`
}
