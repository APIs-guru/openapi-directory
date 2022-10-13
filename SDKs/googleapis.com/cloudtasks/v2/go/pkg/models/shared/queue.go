package shared

type QueueStateEnum string

const (
	QueueStateEnumStateUnspecified QueueStateEnum = "STATE_UNSPECIFIED"
	QueueStateEnumRunning          QueueStateEnum = "RUNNING"
	QueueStateEnumPaused           QueueStateEnum = "PAUSED"
	QueueStateEnumDisabled         QueueStateEnum = "DISABLED"
)

type Queue struct {
	AppEngineRoutingOverride *AppEngineRouting         `json:"appEngineRoutingOverride"`
	Name                     *string                   `json:"name"`
	PurgeTime                *string                   `json:"purgeTime"`
	RateLimits               *RateLimits               `json:"rateLimits"`
	RetryConfig              *RetryConfig              `json:"retryConfig"`
	StackdriverLoggingConfig *StackdriverLoggingConfig `json:"stackdriverLoggingConfig"`
	State                    *QueueStateEnum           `json:"state"`
}
