package shared

// Usage
// An amount of usage over a time frame.
type Usage struct {
	UsageRateTimeline *UsageRateTimeline `json:"usageRateTimeline,omitempty"`
}
