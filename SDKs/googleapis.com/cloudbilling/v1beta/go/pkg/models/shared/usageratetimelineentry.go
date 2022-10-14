package shared

type UsageRateTimelineEntry struct {
	EffectiveTime *EstimationTimePoint `json:"effectiveTime,omitempty"`
	UsageRate     *float64             `json:"usageRate,omitempty"`
}
