package shared

type PubSubIoDetails struct {
	Subscription *string `json:"subscription"`
	Topic        *string `json:"topic"`
}
