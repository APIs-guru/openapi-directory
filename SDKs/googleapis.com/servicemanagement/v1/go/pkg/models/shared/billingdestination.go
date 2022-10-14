package shared

type BillingDestination struct {
	Metrics           []string `json:"metrics,omitempty"`
	MonitoredResource *string  `json:"monitoredResource,omitempty"`
}
