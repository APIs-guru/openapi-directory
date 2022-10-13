package shared

type LoggingDestination struct {
	Logs              []string `json:"logs"`
	MonitoredResource *string  `json:"monitoredResource"`
}
