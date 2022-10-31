package shared




type FileUpdateInputAccessEnum string

const (
    FileUpdateInputAccessEnumPublicIndexable FileUpdateInputAccessEnum = "PUBLIC_INDEXABLE"
FileUpdateInputAccessEnumPublicNotIndexable FileUpdateInputAccessEnum = "PUBLIC_NOT_INDEXABLE"
FileUpdateInputAccessEnumHiddenIndexable FileUpdateInputAccessEnum = "HIDDEN_INDEXABLE"
FileUpdateInputAccessEnumHiddenNotIndexable FileUpdateInputAccessEnum = "HIDDEN_NOT_INDEXABLE"
FileUpdateInputAccessEnumHiddenPrivate FileUpdateInputAccessEnum = "HIDDEN_PRIVATE"
FileUpdateInputAccessEnumPrivate FileUpdateInputAccessEnum = "PRIVATE"
)


type FileUpdateInput struct {
    Access *FileUpdateInputAccessEnum `json:"access,omitempty"`
    IsUsableInContent *bool `json:"isUsableInContent,omitempty"`
    Name *string `json:"name,omitempty"`
    ParentFolderID *string `json:"parentFolderId,omitempty"`
    ParentFolderPath *string `json:"parentFolderPath,omitempty"`
    
}

