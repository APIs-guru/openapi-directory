package shared

type TimeEvents struct {
	DroppedAnnotationsCount   *int32      `json:"droppedAnnotationsCount,omitempty"`
	DroppedMessageEventsCount *int32      `json:"droppedMessageEventsCount,omitempty"`
	TimeEvent                 []TimeEvent `json:"timeEvent,omitempty"`
}
