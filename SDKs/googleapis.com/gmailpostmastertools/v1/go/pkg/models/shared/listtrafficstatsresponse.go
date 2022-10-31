package shared

type ListTrafficStatsResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	TrafficStats  []TrafficStats `json:"trafficStats,omitempty"`
}
