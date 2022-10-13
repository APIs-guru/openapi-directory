package shared

type ListEventsResponse struct {
	ErrorEvents    []ErrorEvent `json:"errorEvents"`
	NextPageToken  *string      `json:"nextPageToken"`
	TimeRangeBegin *string      `json:"timeRangeBegin"`
}
