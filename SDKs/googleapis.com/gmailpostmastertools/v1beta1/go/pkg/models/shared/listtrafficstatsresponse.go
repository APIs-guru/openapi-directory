package shared

type ListTrafficStatsResponse struct {
	NextPageToken *string        `json:"nextPageToken"`
	TrafficStats  []TrafficStats `json:"trafficStats"`
}
