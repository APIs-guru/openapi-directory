package shared

type FolderStateEnum string

const (
	FolderStateEnumStateUnspecified FolderStateEnum = "STATE_UNSPECIFIED"
	FolderStateEnumActive           FolderStateEnum = "ACTIVE"
	FolderStateEnumDeleteRequested  FolderStateEnum = "DELETE_REQUESTED"
)

// Folder
// A folder in an organization's resource hierarchy, used to organize that organization's resources.
type Folder struct {
	CreateTime  *string          `json:"createTime,omitempty"`
	DeleteTime  *string          `json:"deleteTime,omitempty"`
	DisplayName *string          `json:"displayName,omitempty"`
	Etag        *string          `json:"etag,omitempty"`
	Name        *string          `json:"name,omitempty"`
	Parent      *string          `json:"parent,omitempty"`
	State       *FolderStateEnum `json:"state,omitempty"`
	UpdateTime  *string          `json:"updateTime,omitempty"`
}

// FolderInput
// A folder in an organization's resource hierarchy, used to organize that organization's resources.
type FolderInput struct {
	DisplayName *string `json:"displayName,omitempty"`
	Parent      *string `json:"parent,omitempty"`
}
