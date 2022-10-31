package shared




type QueueStateEnum string

const (
    QueueStateEnumStateUnspecified QueueStateEnum = "STATE_UNSPECIFIED"
QueueStateEnumRunning QueueStateEnum = "RUNNING"
QueueStateEnumPaused QueueStateEnum = "PAUSED"
QueueStateEnumDisabled QueueStateEnum = "DISABLED"
)



type QueueTypeEnum string

const (
    QueueTypeEnumTypeUnspecified QueueTypeEnum = "TYPE_UNSPECIFIED"
QueueTypeEnumPull QueueTypeEnum = "PULL"
QueueTypeEnumPush QueueTypeEnum = "PUSH"
)


type Queue struct {
    AppEngineHTTPQueue *AppEngineHTTPQueue `json:"appEngineHttpQueue,omitempty"`
    Name *string `json:"name,omitempty"`
    PurgeTime *string `json:"purgeTime,omitempty"`
    RateLimits *RateLimits `json:"rateLimits,omitempty"`
    RetryConfig *RetryConfig `json:"retryConfig,omitempty"`
    StackdriverLoggingConfig *StackdriverLoggingConfig `json:"stackdriverLoggingConfig,omitempty"`
    State *QueueStateEnum `json:"state,omitempty"`
    Stats *QueueStats `json:"stats,omitempty"`
    TaskTTL *string `json:"taskTtl,omitempty"`
    TombstoneTTL *string `json:"tombstoneTtl,omitempty"`
    Type *QueueTypeEnum `json:"type,omitempty"`
    
}

