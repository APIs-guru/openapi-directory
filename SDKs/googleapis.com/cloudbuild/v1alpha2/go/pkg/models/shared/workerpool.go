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
	CreateTime    *string              `json:"createTime"`
	DeleteTime    *string              `json:"deleteTime"`
	Name          *string              `json:"name"`
	NetworkConfig *NetworkConfig       `json:"networkConfig"`
	Region        *string              `json:"region"`
	State         *WorkerPoolStateEnum `json:"state"`
	UpdateTime    *string              `json:"updateTime"`
	WorkerConfig  *WorkerConfig        `json:"workerConfig"`
}
