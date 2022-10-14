package shared

type MonitoringDestination struct {
	Metrics           []string `json:"metrics,omitempty"`
	MonitoredResource *string  `json:"monitoredResource,omitempty"`
}
