package shared



type LoggingDestination struct {
    Logs []string `json:"logs,omitempty"`
    MonitoredResource *string `json:"monitoredResource,omitempty"`
    
}

