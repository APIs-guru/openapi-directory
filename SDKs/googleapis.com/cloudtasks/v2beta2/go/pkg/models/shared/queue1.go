package shared

// Queue1
// A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, target types, and others.
type Queue1 struct {
	AppEngineHTTPTarget *AppEngineHTTPTarget   `json:"appEngineHttpTarget,omitempty"`
	HTTPTarget          *HTTPTarget            `json:"httpTarget,omitempty"`
	Name                *string                `json:"name,omitempty"`
	PullTarget          map[string]interface{} `json:"pullTarget,omitempty"`
	PurgeTime           *string                `json:"purgeTime,omitempty"`
	RateLimits          *RateLimits            `json:"rateLimits,omitempty"`
	RetryConfig         *RetryConfig           `json:"retryConfig,omitempty"`
	State               *QueueStateEnum        `json:"state,omitempty"`
	Stats               *QueueStats            `json:"stats,omitempty"`
	TaskTTL             *string                `json:"taskTtl,omitempty"`
	TombstoneTTL        *string                `json:"tombstoneTtl,omitempty"`
}
