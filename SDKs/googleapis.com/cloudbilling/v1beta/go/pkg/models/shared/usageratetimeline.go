package shared

type UsageRateTimeline struct {
	Unit                     *string                  `json:"unit"`
	UsageRateTimelineEntries []UsageRateTimelineEntry `json:"usageRateTimelineEntries"`
}
