package shared

type MonitoringDestination struct {
	Metrics           []string `json:"metrics"`
	MonitoredResource *string  `json:"monitoredResource"`
}
