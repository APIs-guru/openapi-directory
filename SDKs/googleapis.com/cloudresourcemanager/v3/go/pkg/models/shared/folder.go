package shared

type FolderStateEnum string

const (
	FolderStateEnumStateUnspecified FolderStateEnum = "STATE_UNSPECIFIED"
	FolderStateEnumActive           FolderStateEnum = "ACTIVE"
	FolderStateEnumDeleteRequested  FolderStateEnum = "DELETE_REQUESTED"
)

type Folder struct {
	CreateTime  *string          `json:"createTime"`
	DeleteTime  *string          `json:"deleteTime"`
	DisplayName *string          `json:"displayName"`
	Etag        *string          `json:"etag"`
	Name        *string          `json:"name"`
	Parent      *string          `json:"parent"`
	State       *FolderStateEnum `json:"state"`
	UpdateTime  *string          `json:"updateTime"`
}
