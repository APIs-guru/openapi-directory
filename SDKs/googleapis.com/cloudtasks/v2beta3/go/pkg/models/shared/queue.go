package shared

type QueueStateEnum string

const (
	QueueStateEnumStateUnspecified QueueStateEnum = "STATE_UNSPECIFIED"
	QueueStateEnumRunning          QueueStateEnum = "RUNNING"
	QueueStateEnumPaused           QueueStateEnum = "PAUSED"
	QueueStateEnumDisabled         QueueStateEnum = "DISABLED"
)

type QueueTypeEnum string

const (
	QueueTypeEnumTypeUnspecified QueueTypeEnum = "TYPE_UNSPECIFIED"
	QueueTypeEnumPull            QueueTypeEnum = "PULL"
	QueueTypeEnumPush            QueueTypeEnum = "PUSH"
)

type Queue struct {
	AppEngineHTTPQueue       *AppEngineHTTPQueue       `json:"appEngineHttpQueue"`
	Name                     *string                   `json:"name"`
	PurgeTime                *string                   `json:"purgeTime"`
	RateLimits               *RateLimits               `json:"rateLimits"`
	RetryConfig              *RetryConfig              `json:"retryConfig"`
	StackdriverLoggingConfig *StackdriverLoggingConfig `json:"stackdriverLoggingConfig"`
	State                    *QueueStateEnum           `json:"state"`
	Stats                    *QueueStats               `json:"stats"`
	TaskTTL                  *string                   `json:"taskTtl"`
	TombstoneTTL             *string                   `json:"tombstoneTtl"`
	Type                     *QueueTypeEnum            `json:"type"`
}
