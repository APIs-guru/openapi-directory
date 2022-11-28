package shared

// MonitoringDestination
// Configuration of a specific monitoring destination (the producer project or the consumer project).
type MonitoringDestination struct {
	Metrics           []string `json:"metrics,omitempty"`
	MonitoredResource *string  `json:"monitoredResource,omitempty"`
}
