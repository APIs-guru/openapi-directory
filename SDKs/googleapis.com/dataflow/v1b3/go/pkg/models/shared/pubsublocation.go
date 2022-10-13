package shared

type PubsubLocation struct {
	DropLateData         *bool   `json:"dropLateData"`
	IDLabel              *string `json:"idLabel"`
	Subscription         *string `json:"subscription"`
	TimestampLabel       *string `json:"timestampLabel"`
	Topic                *string `json:"topic"`
	TrackingSubscription *string `json:"trackingSubscription"`
	WithAttributes       *bool   `json:"withAttributes"`
}
