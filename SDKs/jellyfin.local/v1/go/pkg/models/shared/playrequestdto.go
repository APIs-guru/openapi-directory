package shared

type PlayRequestDto struct {
	PlayingItemPosition *int32   `json:"PlayingItemPosition"`
	PlayingQueue        []string `json:"PlayingQueue"`
	StartPositionTicks  *int64   `json:"StartPositionTicks"`
}
