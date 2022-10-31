package shared




type QueueStateEnum string

const (
    QueueStateEnumStateUnspecified QueueStateEnum = "STATE_UNSPECIFIED"
QueueStateEnumRunning QueueStateEnum = "RUNNING"
QueueStateEnumPaused QueueStateEnum = "PAUSED"
QueueStateEnumDisabled QueueStateEnum = "DISABLED"
)


type Queue struct {
    AppEngineHTTPTarget *AppEngineHTTPTarget `json:"appEngineHttpTarget,omitempty"`
    HTTPTarget *HTTPTarget `json:"httpTarget,omitempty"`
    Name *string `json:"name,omitempty"`
    PullTarget map[string]interface{} `json:"pullTarget,omitempty"`
    PurgeTime *string `json:"purgeTime,omitempty"`
    RateLimits *RateLimits `json:"rateLimits,omitempty"`
    RetryConfig *RetryConfig `json:"retryConfig,omitempty"`
    State *QueueStateEnum `json:"state,omitempty"`
    Stats *QueueStats `json:"stats,omitempty"`
    TaskTTL *string `json:"taskTtl,omitempty"`
    TombstoneTTL *string `json:"tombstoneTtl,omitempty"`
    
}

