package shared

type WorkerMessage struct {
	Labels               map[string]string          `json:"labels"`
	Time                 *string                    `json:"time"`
	WorkerHealthReport   *WorkerHealthReport        `json:"workerHealthReport"`
	WorkerLifecycleEvent *WorkerLifecycleEvent      `json:"workerLifecycleEvent"`
	WorkerMessageCode    *WorkerMessageCode         `json:"workerMessageCode"`
	WorkerMetrics        *ResourceUtilizationReport `json:"workerMetrics"`
	WorkerShutdownNotice *WorkerShutdownNotice      `json:"workerShutdownNotice"`
}
