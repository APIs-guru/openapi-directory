package shared

type QueueStateEnum string

const (
	QueueStateEnumStateUnspecified QueueStateEnum = "STATE_UNSPECIFIED"
	QueueStateEnumRunning          QueueStateEnum = "RUNNING"
	QueueStateEnumPaused           QueueStateEnum = "PAUSED"
	QueueStateEnumDisabled         QueueStateEnum = "DISABLED"
)

type Queue struct {
	AppEngineHTTPTarget *AppEngineHTTPTarget   `json:"appEngineHttpTarget"`
	HTTPTarget          *HTTPTarget            `json:"httpTarget"`
	Name                *string                `json:"name"`
	PullTarget          map[string]interface{} `json:"pullTarget"`
	PurgeTime           *string                `json:"purgeTime"`
	RateLimits          *RateLimits            `json:"rateLimits"`
	RetryConfig         *RetryConfig           `json:"retryConfig"`
	State               *QueueStateEnum        `json:"state"`
	Stats               *QueueStats            `json:"stats"`
	TaskTTL             *string                `json:"taskTtl"`
	TombstoneTTL        *string                `json:"tombstoneTtl"`
}
