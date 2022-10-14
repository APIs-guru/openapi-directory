package shared

type FolderLifecycleStateEnum string

const (
	FolderLifecycleStateEnumLifecycleStateUnspecified FolderLifecycleStateEnum = "LIFECYCLE_STATE_UNSPECIFIED"
	FolderLifecycleStateEnumActive                    FolderLifecycleStateEnum = "ACTIVE"
	FolderLifecycleStateEnumDeleteRequested           FolderLifecycleStateEnum = "DELETE_REQUESTED"
)

type Folder struct {
	CreateTime     *string                   `json:"createTime,omitempty"`
	DisplayName    *string                   `json:"displayName,omitempty"`
	LifecycleState *FolderLifecycleStateEnum `json:"lifecycleState,omitempty"`
	Name           *string                   `json:"name,omitempty"`
	Parent         *string                   `json:"parent,omitempty"`
}
