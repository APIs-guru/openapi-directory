package shared

type UsageRateTimelineEntry struct {
	EffectiveTime *EstimationTimePoint `json:"effectiveTime"`
	UsageRate     *float64             `json:"usageRate"`
}
