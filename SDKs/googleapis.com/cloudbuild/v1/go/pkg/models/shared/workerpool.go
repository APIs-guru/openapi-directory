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
	Annotations         map[string]string    `json:"annotations"`
	CreateTime          *string              `json:"createTime"`
	DeleteTime          *string              `json:"deleteTime"`
	DisplayName         *string              `json:"displayName"`
	Etag                *string              `json:"etag"`
	Name                *string              `json:"name"`
	PrivatePoolV1Config *PrivatePoolV1Config `json:"privatePoolV1Config"`
	State               *WorkerPoolStateEnum `json:"state"`
	UID                 *string              `json:"uid"`
	UpdateTime          *string              `json:"updateTime"`
}
