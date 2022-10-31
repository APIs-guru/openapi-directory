package shared




type LiveStreamStatusStreamStatusEnum string

const (
    LiveStreamStatusStreamStatusEnumCreated LiveStreamStatusStreamStatusEnum = "created"
LiveStreamStatusStreamStatusEnumReady LiveStreamStatusStreamStatusEnum = "ready"
LiveStreamStatusStreamStatusEnumActive LiveStreamStatusStreamStatusEnum = "active"
LiveStreamStatusStreamStatusEnumInactive LiveStreamStatusStreamStatusEnum = "inactive"
LiveStreamStatusStreamStatusEnumError LiveStreamStatusStreamStatusEnum = "error"
)


type LiveStreamStatus struct {
    HealthStatus *LiveStreamHealthStatus `json:"healthStatus,omitempty"`
    StreamStatus *LiveStreamStatusStreamStatusEnum `json:"streamStatus,omitempty"`
    
}

