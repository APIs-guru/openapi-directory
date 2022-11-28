package shared

// WorkloadsConfig
// The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
type WorkloadsConfig struct {
	Scheduler *SchedulerResource `json:"scheduler,omitempty"`
	WebServer *WebServerResource `json:"webServer,omitempty"`
	Worker    *WorkerResource    `json:"worker,omitempty"`
}
