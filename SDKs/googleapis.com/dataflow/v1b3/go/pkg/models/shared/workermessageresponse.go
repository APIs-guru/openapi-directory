package shared

// WorkerMessageResponse
// A worker_message response allows the server to pass information to the sender.
type WorkerMessageResponse struct {
	WorkerHealthReportResponse   *WorkerHealthReportResponse `json:"workerHealthReportResponse,omitempty"`
	WorkerMetricsResponse        map[string]interface{}      `json:"workerMetricsResponse,omitempty"`
	WorkerShutdownNoticeResponse map[string]interface{}      `json:"workerShutdownNoticeResponse,omitempty"`
}
