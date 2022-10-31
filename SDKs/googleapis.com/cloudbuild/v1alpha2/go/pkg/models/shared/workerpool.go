package shared

type WorkerPoolStateEnum string

const (
	WorkerPoolStateEnumStateUnspecified WorkerPoolStateEnum = "STATE_UNSPECIFIED"
	WorkerPoolStateEnumCreating         WorkerPoolStateEnum = "CREATING"
	WorkerPoolStateEnumRunning          WorkerPoolStateEnum = "RUNNING"
	WorkerPoolStateEnumDeleting         WorkerPoolStateEnum = "DELETING"
	WorkerPoolStateEnumDeleted          WorkerPoolStateEnum = "DELETED"
)

type WorkerPool struct {
	CreateTime    *string              `json:"createTime,omitempty"`
	DeleteTime    *string              `json:"deleteTime,omitempty"`
	Name          *string              `json:"name,omitempty"`
	NetworkConfig *NetworkConfig       `json:"networkConfig,omitempty"`
	Region        *string              `json:"region,omitempty"`
	State         *WorkerPoolStateEnum `json:"state,omitempty"`
	UpdateTime    *string              `json:"updateTime,omitempty"`
	WorkerConfig  *WorkerConfig        `json:"workerConfig,omitempty"`
}
