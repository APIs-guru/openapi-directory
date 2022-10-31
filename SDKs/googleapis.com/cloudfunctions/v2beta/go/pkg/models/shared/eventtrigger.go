package shared




type EventTriggerRetryPolicyEnum string

const (
    EventTriggerRetryPolicyEnumRetryPolicyUnspecified EventTriggerRetryPolicyEnum = "RETRY_POLICY_UNSPECIFIED"
EventTriggerRetryPolicyEnumRetryPolicyDoNotRetry EventTriggerRetryPolicyEnum = "RETRY_POLICY_DO_NOT_RETRY"
EventTriggerRetryPolicyEnumRetryPolicyRetry EventTriggerRetryPolicyEnum = "RETRY_POLICY_RETRY"
)


type EventTrigger struct {
    Channel *string `json:"channel,omitempty"`
    EventFilters []EventFilter `json:"eventFilters,omitempty"`
    EventType *string `json:"eventType,omitempty"`
    PubsubTopic *string `json:"pubsubTopic,omitempty"`
    RetryPolicy *EventTriggerRetryPolicyEnum `json:"retryPolicy,omitempty"`
    ServiceAccountEmail *string `json:"serviceAccountEmail,omitempty"`
    Trigger *string `json:"trigger,omitempty"`
    TriggerRegion *string `json:"triggerRegion,omitempty"`
    
}

