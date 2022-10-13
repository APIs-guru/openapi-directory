package shared

type TimeEvent struct {
	Annotation   *Annotation   `json:"annotation"`
	MessageEvent *MessageEvent `json:"messageEvent"`
	Time         *string       `json:"time"`
}
