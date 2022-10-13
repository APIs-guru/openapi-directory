package shared

type Subscription struct {
	AckDeadlineSeconds *int32      `json:"ackDeadlineSeconds"`
	Name               *string     `json:"name"`
	PushConfig         *PushConfig `json:"pushConfig"`
	Topic              *string     `json:"topic"`
}
