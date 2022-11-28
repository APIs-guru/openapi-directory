package shared

// WorkerHealthReportResponse
// WorkerHealthReportResponse contains information returned to the worker in response to a health ping.
type WorkerHealthReportResponse struct {
	ReportInterval *string `json:"reportInterval,omitempty"`
}
