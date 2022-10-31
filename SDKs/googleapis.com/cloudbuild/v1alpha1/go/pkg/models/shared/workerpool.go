package shared




type WorkerPoolRegionsEnum string

const (
    WorkerPoolRegionsEnumRegionUnspecified WorkerPoolRegionsEnum = "REGION_UNSPECIFIED"
WorkerPoolRegionsEnumUsCentral1 WorkerPoolRegionsEnum = "us-central1"
WorkerPoolRegionsEnumUsWest1 WorkerPoolRegionsEnum = "us-west1"
WorkerPoolRegionsEnumUsEast1 WorkerPoolRegionsEnum = "us-east1"
WorkerPoolRegionsEnumUsEast4 WorkerPoolRegionsEnum = "us-east4"
)



type WorkerPoolStatusEnum string

const (
    WorkerPoolStatusEnumStatusUnspecified WorkerPoolStatusEnum = "STATUS_UNSPECIFIED"
WorkerPoolStatusEnumCreating WorkerPoolStatusEnum = "CREATING"
WorkerPoolStatusEnumRunning WorkerPoolStatusEnum = "RUNNING"
WorkerPoolStatusEnumDeleting WorkerPoolStatusEnum = "DELETING"
WorkerPoolStatusEnumDeleted WorkerPoolStatusEnum = "DELETED"
)


type WorkerPool struct {
    CreateTime *string `json:"createTime,omitempty"`
    DeleteTime *string `json:"deleteTime,omitempty"`
    Name *string `json:"name,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    Regions []WorkerPoolRegionsEnum `json:"regions,omitempty"`
    ServiceAccountEmail *string `json:"serviceAccountEmail,omitempty"`
    Status *WorkerPoolStatusEnum `json:"status,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    WorkerConfig *WorkerConfig `json:"workerConfig,omitempty"`
    WorkerCount *string `json:"workerCount,omitempty"`
    
}

