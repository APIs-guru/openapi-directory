package shared

// BillingDestination
// Configuration of a specific billing destination (Currently only support bill against consumer project).
type BillingDestination struct {
	Metrics           []string `json:"metrics,omitempty"`
	MonitoredResource *string  `json:"monitoredResource,omitempty"`
}
