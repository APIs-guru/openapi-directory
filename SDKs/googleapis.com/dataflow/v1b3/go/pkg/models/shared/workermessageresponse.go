package shared



type WorkerMessageResponse struct {
    WorkerHealthReportResponse *WorkerHealthReportResponse `json:"workerHealthReportResponse,omitempty"`
    WorkerMetricsResponse map[string]interface{} `json:"workerMetricsResponse,omitempty"`
    WorkerShutdownNoticeResponse map[string]interface{} `json:"workerShutdownNoticeResponse,omitempty"`
    
}

