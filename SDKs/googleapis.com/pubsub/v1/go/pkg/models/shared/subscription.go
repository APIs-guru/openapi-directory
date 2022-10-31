package shared

type SubscriptionStateEnum string

const (
	SubscriptionStateEnumStateUnspecified SubscriptionStateEnum = "STATE_UNSPECIFIED"
	SubscriptionStateEnumActive           SubscriptionStateEnum = "ACTIVE"
	SubscriptionStateEnumResourceError    SubscriptionStateEnum = "RESOURCE_ERROR"
)

type Subscription struct {
	AckDeadlineSeconds            *int32                 `json:"ackDeadlineSeconds,omitempty"`
	BigqueryConfig                *BigQueryConfig        `json:"bigqueryConfig,omitempty"`
	DeadLetterPolicy              *DeadLetterPolicy      `json:"deadLetterPolicy,omitempty"`
	Detached                      *bool                  `json:"detached,omitempty"`
	EnableExactlyOnceDelivery     *bool                  `json:"enableExactlyOnceDelivery,omitempty"`
	EnableMessageOrdering         *bool                  `json:"enableMessageOrdering,omitempty"`
	ExpirationPolicy              *ExpirationPolicy      `json:"expirationPolicy,omitempty"`
	Filter                        *string                `json:"filter,omitempty"`
	Labels                        map[string]string      `json:"labels,omitempty"`
	MessageRetentionDuration      *string                `json:"messageRetentionDuration,omitempty"`
	Name                          *string                `json:"name,omitempty"`
	PushConfig                    *PushConfig            `json:"pushConfig,omitempty"`
	RetainAckedMessages           *bool                  `json:"retainAckedMessages,omitempty"`
	RetryPolicy                   *RetryPolicy           `json:"retryPolicy,omitempty"`
	State                         *SubscriptionStateEnum `json:"state,omitempty"`
	Topic                         *string                `json:"topic,omitempty"`
	TopicMessageRetentionDuration *string                `json:"topicMessageRetentionDuration,omitempty"`
}
