package shared



type UsageRateTimeline struct {
    Unit *string `json:"unit,omitempty"`
    UsageRateTimelineEntries []UsageRateTimelineEntry `json:"usageRateTimelineEntries,omitempty"`
    
}

