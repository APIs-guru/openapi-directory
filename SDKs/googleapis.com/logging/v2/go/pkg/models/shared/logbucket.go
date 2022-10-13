package shared

type LogBucketLifecycleStateEnum string

const (
	LogBucketLifecycleStateEnumLifecycleStateUnspecified LogBucketLifecycleStateEnum = "LIFECYCLE_STATE_UNSPECIFIED"
	LogBucketLifecycleStateEnumActive                    LogBucketLifecycleStateEnum = "ACTIVE"
	LogBucketLifecycleStateEnumDeleteRequested           LogBucketLifecycleStateEnum = "DELETE_REQUESTED"
)

type LogBucket struct {
	CmekSettings     *CmekSettings                `json:"cmekSettings"`
	CreateTime       *string                      `json:"createTime"`
	Description      *string                      `json:"description"`
	IndexConfigs     []IndexConfig                `json:"indexConfigs"`
	LifecycleState   *LogBucketLifecycleStateEnum `json:"lifecycleState"`
	Locked           *bool                        `json:"locked"`
	Name             *string                      `json:"name"`
	RestrictedFields []string                     `json:"restrictedFields"`
	RetentionDays    *int32                       `json:"retentionDays"`
	UpdateTime       *string                      `json:"updateTime"`
}
