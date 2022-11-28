package shared

// TimeEvent
// A time-stamped annotation or message event in the Span.
type TimeEvent struct {
	Annotation   *Annotation   `json:"annotation,omitempty"`
	MessageEvent *MessageEvent `json:"messageEvent,omitempty"`
	Time         *string       `json:"time,omitempty"`
}
