package shared

type WorkerPoolRegionsEnum string

const (
	WorkerPoolRegionsEnumRegionUnspecified WorkerPoolRegionsEnum = "REGION_UNSPECIFIED"
	WorkerPoolRegionsEnumUsCentral1        WorkerPoolRegionsEnum = "us-central1"
	WorkerPoolRegionsEnumUsWest1           WorkerPoolRegionsEnum = "us-west1"
	WorkerPoolRegionsEnumUsEast1           WorkerPoolRegionsEnum = "us-east1"
	WorkerPoolRegionsEnumUsEast4           WorkerPoolRegionsEnum = "us-east4"
)

type WorkerPoolStatusEnum string

const (
	WorkerPoolStatusEnumStatusUnspecified WorkerPoolStatusEnum = "STATUS_UNSPECIFIED"
	WorkerPoolStatusEnumCreating          WorkerPoolStatusEnum = "CREATING"
	WorkerPoolStatusEnumRunning           WorkerPoolStatusEnum = "RUNNING"
	WorkerPoolStatusEnumDeleting          WorkerPoolStatusEnum = "DELETING"
	WorkerPoolStatusEnumDeleted           WorkerPoolStatusEnum = "DELETED"
)

// WorkerPool
// Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.
type WorkerPool struct {
	CreateTime          *string                 `json:"createTime,omitempty"`
	DeleteTime          *string                 `json:"deleteTime,omitempty"`
	Name                *string                 `json:"name,omitempty"`
	ProjectID           *string                 `json:"projectId,omitempty"`
	Regions             []WorkerPoolRegionsEnum `json:"regions,omitempty"`
	ServiceAccountEmail *string                 `json:"serviceAccountEmail,omitempty"`
	Status              *WorkerPoolStatusEnum   `json:"status,omitempty"`
	UpdateTime          *string                 `json:"updateTime,omitempty"`
	WorkerConfig        *WorkerConfig           `json:"workerConfig,omitempty"`
	WorkerCount         *string                 `json:"workerCount,omitempty"`
}
