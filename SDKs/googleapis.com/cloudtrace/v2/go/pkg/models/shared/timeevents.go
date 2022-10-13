package shared

type TimeEvents struct {
	DroppedAnnotationsCount   *int32      `json:"droppedAnnotationsCount"`
	DroppedMessageEventsCount *int32      `json:"droppedMessageEventsCount"`
	TimeEvent                 []TimeEvent `json:"timeEvent"`
}
