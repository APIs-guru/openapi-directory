package shared

type Usage struct {
	ProducerNotificationChannel *string     `json:"producerNotificationChannel"`
	Requirements                []string    `json:"requirements"`
	Rules                       []UsageRule `json:"rules"`
}
