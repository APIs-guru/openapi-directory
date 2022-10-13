package shared

type FolderLifecycleStateEnum string

const (
	FolderLifecycleStateEnumLifecycleStateUnspecified FolderLifecycleStateEnum = "LIFECYCLE_STATE_UNSPECIFIED"
	FolderLifecycleStateEnumActive                    FolderLifecycleStateEnum = "ACTIVE"
	FolderLifecycleStateEnumDeleteRequested           FolderLifecycleStateEnum = "DELETE_REQUESTED"
)

type Folder struct {
	CreateTime     *string                   `json:"createTime"`
	DisplayName    *string                   `json:"displayName"`
	LifecycleState *FolderLifecycleStateEnum `json:"lifecycleState"`
	Name           *string                   `json:"name"`
	Parent         *string                   `json:"parent"`
}
