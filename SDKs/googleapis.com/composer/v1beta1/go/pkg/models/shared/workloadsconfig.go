package shared

type WorkloadsConfig struct {
	Scheduler *SchedulerResource `json:"scheduler"`
	WebServer *WebServerResource `json:"webServer"`
	Worker    *WorkerResource    `json:"worker"`
}
