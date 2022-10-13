package shared

type WorkerMessageResponse struct {
	WorkerHealthReportResponse   *WorkerHealthReportResponse `json:"workerHealthReportResponse"`
	WorkerMetricsResponse        map[string]interface{}      `json:"workerMetricsResponse"`
	WorkerShutdownNoticeResponse map[string]interface{}      `json:"workerShutdownNoticeResponse"`
}
