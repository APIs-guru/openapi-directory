package shared

type ListGroupStatsResponse struct {
	ErrorGroupStats []ErrorGroupStats `json:"errorGroupStats"`
	NextPageToken   *string           `json:"nextPageToken"`
	TimeRangeBegin  *string           `json:"timeRangeBegin"`
}
