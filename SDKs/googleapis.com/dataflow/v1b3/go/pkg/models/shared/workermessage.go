package shared

// WorkerMessage
// WorkerMessage provides information to the backend about a worker.
type WorkerMessage struct {
	Labels               map[string]string          `json:"labels,omitempty"`
	Time                 *string                    `json:"time,omitempty"`
	WorkerHealthReport   *WorkerHealthReport        `json:"workerHealthReport,omitempty"`
	WorkerLifecycleEvent *WorkerLifecycleEvent      `json:"workerLifecycleEvent,omitempty"`
	WorkerMessageCode    *WorkerMessageCode         `json:"workerMessageCode,omitempty"`
	WorkerMetrics        *ResourceUtilizationReport `json:"workerMetrics,omitempty"`
	WorkerShutdownNotice *WorkerShutdownNotice      `json:"workerShutdownNotice,omitempty"`
}
