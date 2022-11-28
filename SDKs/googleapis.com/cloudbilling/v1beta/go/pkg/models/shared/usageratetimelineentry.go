package shared

// UsageRateTimelineEntry
// A usage rate timeline entry. Each entry specifies a constant usage rate during a time interval.
type UsageRateTimelineEntry struct {
	EffectiveTime *EstimationTimePoint `json:"effectiveTime,omitempty"`
	UsageRate     *float64             `json:"usageRate,omitempty"`
}
