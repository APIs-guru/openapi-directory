package shared

type SubscriptionStateEnum string

const (
	SubscriptionStateEnumStateUnspecified SubscriptionStateEnum = "STATE_UNSPECIFIED"
	SubscriptionStateEnumActive           SubscriptionStateEnum = "ACTIVE"
	SubscriptionStateEnumResourceError    SubscriptionStateEnum = "RESOURCE_ERROR"
)

type Subscription struct {
	AckDeadlineSeconds            *int32                 `json:"ackDeadlineSeconds"`
	BigqueryConfig                *BigQueryConfig        `json:"bigqueryConfig"`
	DeadLetterPolicy              *DeadLetterPolicy      `json:"deadLetterPolicy"`
	Detached                      *bool                  `json:"detached"`
	EnableExactlyOnceDelivery     *bool                  `json:"enableExactlyOnceDelivery"`
	EnableMessageOrdering         *bool                  `json:"enableMessageOrdering"`
	ExpirationPolicy              *ExpirationPolicy      `json:"expirationPolicy"`
	Filter                        *string                `json:"filter"`
	Labels                        map[string]string      `json:"labels"`
	MessageRetentionDuration      *string                `json:"messageRetentionDuration"`
	Name                          *string                `json:"name"`
	PushConfig                    *PushConfig            `json:"pushConfig"`
	RetainAckedMessages           *bool                  `json:"retainAckedMessages"`
	RetryPolicy                   *RetryPolicy           `json:"retryPolicy"`
	State                         *SubscriptionStateEnum `json:"state"`
	Topic                         *string                `json:"topic"`
	TopicMessageRetentionDuration *string                `json:"topicMessageRetentionDuration"`
}
