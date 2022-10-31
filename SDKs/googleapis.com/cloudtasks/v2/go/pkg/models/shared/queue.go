package shared

type QueueStateEnum string

const (
	QueueStateEnumStateUnspecified QueueStateEnum = "STATE_UNSPECIFIED"
	QueueStateEnumRunning          QueueStateEnum = "RUNNING"
	QueueStateEnumPaused           QueueStateEnum = "PAUSED"
	QueueStateEnumDisabled         QueueStateEnum = "DISABLED"
)

type Queue struct {
	AppEngineRoutingOverride *AppEngineRouting         `json:"appEngineRoutingOverride,omitempty"`
	Name                     *string                   `json:"name,omitempty"`
	PurgeTime                *string                   `json:"purgeTime,omitempty"`
	RateLimits               *RateLimits               `json:"rateLimits,omitempty"`
	RetryConfig              *RetryConfig              `json:"retryConfig,omitempty"`
	StackdriverLoggingConfig *StackdriverLoggingConfig `json:"stackdriverLoggingConfig,omitempty"`
	State                    *QueueStateEnum           `json:"state,omitempty"`
}
