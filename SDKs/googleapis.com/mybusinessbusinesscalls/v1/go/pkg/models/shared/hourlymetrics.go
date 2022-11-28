package shared

// HourlyMetrics
// Metrics for an hour.
type HourlyMetrics struct {
	Hour             *int32 `json:"hour,omitempty"`
	MissedCallsCount *int32 `json:"missedCallsCount,omitempty"`
}
