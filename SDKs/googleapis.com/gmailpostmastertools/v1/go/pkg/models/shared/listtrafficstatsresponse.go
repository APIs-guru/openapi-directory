package shared

// ListTrafficStatsResponse
// Response message for ListTrafficStats.
type ListTrafficStatsResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	TrafficStats  []TrafficStats `json:"trafficStats,omitempty"`
}
