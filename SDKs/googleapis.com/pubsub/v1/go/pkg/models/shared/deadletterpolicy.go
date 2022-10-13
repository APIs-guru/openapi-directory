package shared

type DeadLetterPolicy struct {
	DeadLetterTopic     *string `json:"deadLetterTopic"`
	MaxDeliveryAttempts *int32  `json:"maxDeliveryAttempts"`
}
