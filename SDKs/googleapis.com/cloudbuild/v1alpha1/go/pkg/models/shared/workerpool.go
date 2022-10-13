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

type WorkerPool struct {
	CreateTime          *string                 `json:"createTime"`
	DeleteTime          *string                 `json:"deleteTime"`
	Name                *string                 `json:"name"`
	ProjectID           *string                 `json:"projectId"`
	Regions             []WorkerPoolRegionsEnum `json:"regions"`
	ServiceAccountEmail *string                 `json:"serviceAccountEmail"`
	Status              *WorkerPoolStatusEnum   `json:"status"`
	UpdateTime          *string                 `json:"updateTime"`
	WorkerConfig        *WorkerConfig           `json:"workerConfig"`
	WorkerCount         *string                 `json:"workerCount"`
}
