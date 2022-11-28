package shared

type WorkerPoolStateEnum string

const (
	WorkerPoolStateEnumStateUnspecified WorkerPoolStateEnum = "STATE_UNSPECIFIED"
	WorkerPoolStateEnumCreating         WorkerPoolStateEnum = "CREATING"
	WorkerPoolStateEnumRunning          WorkerPoolStateEnum = "RUNNING"
	WorkerPoolStateEnumDeleting         WorkerPoolStateEnum = "DELETING"
	WorkerPoolStateEnumDeleted          WorkerPoolStateEnum = "DELETED"
)

// WorkerPoolInput
// Configuration for a `WorkerPool` to run the builds. Workers provide a build environment where Cloud Build runs your builds. Cloud Build owns and maintains a pool of workers for general use. By default, when you submit a build, Cloud Build uses one of the workers from this pool. Builds that run in the default worker pool have access to the public internet. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Custom `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of custom worker pools, see [Custom workers overview](https://cloud.google.com/cloud-build/docs/custom-workers/custom-workers-overview).
type WorkerPoolInput struct {
	Annotations   map[string]string `json:"annotations,omitempty"`
	DisplayName   *string           `json:"displayName,omitempty"`
	NetworkConfig *NetworkConfig    `json:"networkConfig,omitempty"`
	WorkerConfig  *WorkerConfig     `json:"workerConfig,omitempty"`
}

// WorkerPool
// Configuration for a `WorkerPool` to run the builds. Workers provide a build environment where Cloud Build runs your builds. Cloud Build owns and maintains a pool of workers for general use. By default, when you submit a build, Cloud Build uses one of the workers from this pool. Builds that run in the default worker pool have access to the public internet. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Custom `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of custom worker pools, see [Custom workers overview](https://cloud.google.com/cloud-build/docs/custom-workers/custom-workers-overview).
type WorkerPool struct {
	Annotations   map[string]string    `json:"annotations,omitempty"`
	CreateTime    *string              `json:"createTime,omitempty"`
	DeleteTime    *string              `json:"deleteTime,omitempty"`
	DisplayName   *string              `json:"displayName,omitempty"`
	Etag          *string              `json:"etag,omitempty"`
	Name          *string              `json:"name,omitempty"`
	NetworkConfig *NetworkConfig       `json:"networkConfig,omitempty"`
	State         *WorkerPoolStateEnum `json:"state,omitempty"`
	UID           *string              `json:"uid,omitempty"`
	UpdateTime    *string              `json:"updateTime,omitempty"`
	WorkerConfig  *WorkerConfig        `json:"workerConfig,omitempty"`
}
