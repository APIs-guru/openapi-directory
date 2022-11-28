package shared

// DynamicLinkStats
// Analytics stats of a Dynamic Link for a given timeframe.
type DynamicLinkStats struct {
	LinkEventStats []DynamicLinkEventStat `json:"linkEventStats,omitempty"`
}
