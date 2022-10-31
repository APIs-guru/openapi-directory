package shared




type LogBucketLifecycleStateEnum string

const (
    LogBucketLifecycleStateEnumLifecycleStateUnspecified LogBucketLifecycleStateEnum = "LIFECYCLE_STATE_UNSPECIFIED"
LogBucketLifecycleStateEnumActive LogBucketLifecycleStateEnum = "ACTIVE"
LogBucketLifecycleStateEnumDeleteRequested LogBucketLifecycleStateEnum = "DELETE_REQUESTED"
)


type LogBucket struct {
    CmekSettings *CmekSettings `json:"cmekSettings,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    IndexConfigs []IndexConfig `json:"indexConfigs,omitempty"`
    LifecycleState *LogBucketLifecycleStateEnum `json:"lifecycleState,omitempty"`
    Locked *bool `json:"locked,omitempty"`
    Name *string `json:"name,omitempty"`
    RestrictedFields []string `json:"restrictedFields,omitempty"`
    RetentionDays *int32 `json:"retentionDays,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

