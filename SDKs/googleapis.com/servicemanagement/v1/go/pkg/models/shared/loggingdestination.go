package shared

// LoggingDestination
// Configuration of a specific logging destination (the producer project or the consumer project).
type LoggingDestination struct {
	Logs              []string `json:"logs,omitempty"`
	MonitoredResource *string  `json:"monitoredResource,omitempty"`
}
