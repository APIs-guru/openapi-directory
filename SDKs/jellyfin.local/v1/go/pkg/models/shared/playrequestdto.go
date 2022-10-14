package shared

type PlayRequestDto struct {
	PlayingItemPosition *int32   `json:"PlayingItemPosition,omitempty"`
	PlayingQueue        []string `json:"PlayingQueue,omitempty"`
	StartPositionTicks  *int64   `json:"StartPositionTicks,omitempty"`
}
