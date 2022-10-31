package shared

type PubsubLocation struct {
	DropLateData         *bool   `json:"dropLateData,omitempty"`
	IDLabel              *string `json:"idLabel,omitempty"`
	Subscription         *string `json:"subscription,omitempty"`
	TimestampLabel       *string `json:"timestampLabel,omitempty"`
	Topic                *string `json:"topic,omitempty"`
	TrackingSubscription *string `json:"trackingSubscription,omitempty"`
	WithAttributes       *bool   `json:"withAttributes,omitempty"`
}
