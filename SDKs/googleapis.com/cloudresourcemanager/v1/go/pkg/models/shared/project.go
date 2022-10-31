package shared




type ProjectLifecycleStateEnum string

const (
    ProjectLifecycleStateEnumLifecycleStateUnspecified ProjectLifecycleStateEnum = "LIFECYCLE_STATE_UNSPECIFIED"
ProjectLifecycleStateEnumActive ProjectLifecycleStateEnum = "ACTIVE"
ProjectLifecycleStateEnumDeleteRequested ProjectLifecycleStateEnum = "DELETE_REQUESTED"
ProjectLifecycleStateEnumDeleteInProgress ProjectLifecycleStateEnum = "DELETE_IN_PROGRESS"
)


type Project struct {
    CreateTime *string `json:"createTime,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    LifecycleState *ProjectLifecycleStateEnum `json:"lifecycleState,omitempty"`
    Name *string `json:"name,omitempty"`
    Parent *ResourceID `json:"parent,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    ProjectNumber *string `json:"projectNumber,omitempty"`
    
}

