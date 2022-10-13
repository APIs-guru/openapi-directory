package shared

type BillingDestination struct {
	Metrics           []string `json:"metrics"`
	MonitoredResource *string  `json:"monitoredResource"`
}
