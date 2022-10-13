package shared

type EventTriggerRetryPolicyEnum string

const (
	EventTriggerRetryPolicyEnumRetryPolicyUnspecified EventTriggerRetryPolicyEnum = "RETRY_POLICY_UNSPECIFIED"
	EventTriggerRetryPolicyEnumRetryPolicyDoNotRetry  EventTriggerRetryPolicyEnum = "RETRY_POLICY_DO_NOT_RETRY"
	EventTriggerRetryPolicyEnumRetryPolicyRetry       EventTriggerRetryPolicyEnum = "RETRY_POLICY_RETRY"
)

type EventTrigger struct {
	Channel             *string                      `json:"channel"`
	EventFilters        []EventFilter                `json:"eventFilters"`
	EventType           *string                      `json:"eventType"`
	PubsubTopic         *string                      `json:"pubsubTopic"`
	RetryPolicy         *EventTriggerRetryPolicyEnum `json:"retryPolicy"`
	ServiceAccountEmail *string                      `json:"serviceAccountEmail"`
	Trigger             *string                      `json:"trigger"`
	TriggerRegion       *string                      `json:"triggerRegion"`
}
