package shared

// DeadLetterPolicy
// Dead lettering is done on a best effort basis. The same message might be dead lettered multiple times. If validation on any of the fields fails at subscription creation/updation, the create/update subscription request will fail.
type DeadLetterPolicy struct {
	DeadLetterTopic     *string `json:"deadLetterTopic,omitempty"`
	MaxDeliveryAttempts *int32  `json:"maxDeliveryAttempts,omitempty"`
}
