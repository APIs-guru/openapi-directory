package shared

// CounterEvent
// Counter event of the creative.
type CounterEvent struct {
	Name          *string `json:"name,omitempty"`
	ReportingName *string `json:"reportingName,omitempty"`
}
