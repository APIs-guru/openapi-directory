package shared

// FolderInput
// Object for creating a folder.
type FolderInput struct {
	Name           string  `json:"name"`
	ParentFolderID *string `json:"parentFolderId,omitempty"`
	ParentPath     *string `json:"parentPath,omitempty"`
}
