package shared

// ListGroupStatsResponse
// Contains a set of requested error group stats.
type ListGroupStatsResponse struct {
	ErrorGroupStats []ErrorGroupStats `json:"errorGroupStats,omitempty"`
	NextPageToken   *string           `json:"nextPageToken,omitempty"`
	TimeRangeBegin  *string           `json:"timeRangeBegin,omitempty"`
}
