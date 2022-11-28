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

// WorkerPool
// Configuration for a `WorkerPool`. Cloud Build owns and maintains a pool of workers for general use and have no access to a project's private network. By default, builds submitted to Cloud Build will use a worker from this pool. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Private `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of private pools, see [Private pools overview](https://cloud.google.com/build/docs/private-pools/private-pools-overview).
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

// WorkerPoolInput
// Configuration for a `WorkerPool`. Cloud Build owns and maintains a pool of workers for general use and have no access to a project's private network. By default, builds submitted to Cloud Build will use a worker from this pool. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Private `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of private pools, see [Private pools overview](https://cloud.google.com/build/docs/private-pools/private-pools-overview).
type WorkerPoolInput struct {
	Annotations         map[string]string    `json:"annotations,omitempty"`
	DisplayName         *string              `json:"displayName,omitempty"`
	PrivatePoolV1Config *PrivatePoolV1Config `json:"privatePoolV1Config,omitempty"`
}
