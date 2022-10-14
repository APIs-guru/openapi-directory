package shared

type WorkerPoolStateEnum string

const (
	WorkerPoolStateEnumStateUnspecified WorkerPoolStateEnum = "STATE_UNSPECIFIED"
	WorkerPoolStateEnumCreating         WorkerPoolStateEnum = "CREATING"
	WorkerPoolStateEnumRunning          WorkerPoolStateEnum = "RUNNING"
	WorkerPoolStateEnumDeleting         WorkerPoolStateEnum = "DELETING"
	WorkerPoolStateEnumDeleted          WorkerPoolStateEnum = "DELETED"
	WorkerPoolStateEnumUpdating         WorkerPoolStateEnum = "UPDATING"
)

type WorkerPool struct {
	Annotations         map[string]string    `json:"annotations,omitempty"`
	CreateTime          *string              `json:"createTime,omitempty"`
	DeleteTime          *string              `json:"deleteTime,omitempty"`
	DisplayName         *string              `json:"displayName,omitempty"`
	Etag                *string              `json:"etag,omitempty"`
	Name                *string              `json:"name,omitempty"`
	PrivatePoolV1Config *PrivatePoolV1Config `json:"privatePoolV1Config,omitempty"`
	State               *WorkerPoolStateEnum `json:"state,omitempty"`
	UID                 *string              `json:"uid,omitempty"`
	UpdateTime          *string              `json:"updateTime,omitempty"`
}
