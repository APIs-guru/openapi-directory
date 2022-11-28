package shared

type FolderLifecycleStateEnum string

const (
	FolderLifecycleStateEnumLifecycleStateUnspecified FolderLifecycleStateEnum = "LIFECYCLE_STATE_UNSPECIFIED"
	FolderLifecycleStateEnumActive                    FolderLifecycleStateEnum = "ACTIVE"
	FolderLifecycleStateEnumDeleteRequested           FolderLifecycleStateEnum = "DELETE_REQUESTED"
)

// Folder
// A Folder in an Organization's resource hierarchy, used to organize that Organization's resources.
type Folder struct {
	CreateTime     *string                   `json:"createTime,omitempty"`
	DisplayName    *string                   `json:"displayName,omitempty"`
	LifecycleState *FolderLifecycleStateEnum `json:"lifecycleState,omitempty"`
	Name           *string                   `json:"name,omitempty"`
	Parent         *string                   `json:"parent,omitempty"`
}

// FolderInput
// A Folder in an Organization's resource hierarchy, used to organize that Organization's resources.
type FolderInput struct {
	DisplayName *string `json:"displayName,omitempty"`
	Parent      *string `json:"parent,omitempty"`
}
