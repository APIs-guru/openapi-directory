package shared

type WorkerPoolStateEnum string

const (
	WorkerPoolStateEnumStateUnspecified WorkerPoolStateEnum = "STATE_UNSPECIFIED"
	WorkerPoolStateEnumCreating         WorkerPoolStateEnum = "CREATING"
	WorkerPoolStateEnumRunning          WorkerPoolStateEnum = "RUNNING"
	WorkerPoolStateEnumDeleting         WorkerPoolStateEnum = "DELETING"
	WorkerPoolStateEnumDeleted          WorkerPoolStateEnum = "DELETED"
)

// WorkerPool
// Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.
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

// WorkerPoolInput
// Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.
type WorkerPoolInput struct {
	NetworkConfig *NetworkConfig `json:"networkConfig,omitempty"`
	Region        *string        `json:"region,omitempty"`
	WorkerConfig  *WorkerConfig  `json:"workerConfig,omitempty"`
}
