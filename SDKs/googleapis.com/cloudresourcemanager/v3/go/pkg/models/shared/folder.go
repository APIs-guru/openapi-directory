package shared




type FolderStateEnum string

const (
    FolderStateEnumStateUnspecified FolderStateEnum = "STATE_UNSPECIFIED"
FolderStateEnumActive FolderStateEnum = "ACTIVE"
FolderStateEnumDeleteRequested FolderStateEnum = "DELETE_REQUESTED"
)


type Folder struct {
    CreateTime *string `json:"createTime,omitempty"`
    DeleteTime *string `json:"deleteTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Name *string `json:"name,omitempty"`
    Parent *string `json:"parent,omitempty"`
    State *FolderStateEnum `json:"state,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

