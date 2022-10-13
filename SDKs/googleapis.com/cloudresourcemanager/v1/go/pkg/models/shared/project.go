package shared

type ProjectLifecycleStateEnum string

const (
	ProjectLifecycleStateEnumLifecycleStateUnspecified ProjectLifecycleStateEnum = "LIFECYCLE_STATE_UNSPECIFIED"
	ProjectLifecycleStateEnumActive                    ProjectLifecycleStateEnum = "ACTIVE"
	ProjectLifecycleStateEnumDeleteRequested           ProjectLifecycleStateEnum = "DELETE_REQUESTED"
	ProjectLifecycleStateEnumDeleteInProgress          ProjectLifecycleStateEnum = "DELETE_IN_PROGRESS"
)

type Project struct {
	CreateTime     *string                    `json:"createTime"`
	Labels         map[string]string          `json:"labels"`
	LifecycleState *ProjectLifecycleStateEnum `json:"lifecycleState"`
	Name           *string                    `json:"name"`
	Parent         *ResourceID                `json:"parent"`
	ProjectID      *string                    `json:"projectId"`
	ProjectNumber  *string                    `json:"projectNumber"`
}
