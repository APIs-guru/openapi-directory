package shared

type Usage struct {
	ProducerNotificationChannel *string     `json:"producerNotificationChannel,omitempty"`
	Requirements                []string    `json:"requirements,omitempty"`
	Rules                       []UsageRule `json:"rules,omitempty"`
}
