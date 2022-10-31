package shared



type FolderInput struct {
    Name string `json:"name"`
    ParentFolderID *string `json:"parentFolderId,omitempty"`
    ParentPath *string `json:"parentPath,omitempty"`
    
}

