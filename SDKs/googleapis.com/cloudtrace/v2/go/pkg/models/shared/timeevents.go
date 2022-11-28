package shared

// TimeEvents
// A collection of `TimeEvent`s. A `TimeEvent` is a time-stamped annotation on the span, consisting of either user-supplied key:value pairs, or details of a message sent/received between Spans.
type TimeEvents struct {
	DroppedAnnotationsCount   *int32      `json:"droppedAnnotationsCount,omitempty"`
	DroppedMessageEventsCount *int32      `json:"droppedMessageEventsCount,omitempty"`
	TimeEvent                 []TimeEvent `json:"timeEvent,omitempty"`
}
