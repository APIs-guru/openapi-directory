package shared



type WorkloadsConfig struct {
    Scheduler *SchedulerResource `json:"scheduler,omitempty"`
    WebServer *WebServerResource `json:"webServer,omitempty"`
    Worker *WorkerResource `json:"worker,omitempty"`
    
}

