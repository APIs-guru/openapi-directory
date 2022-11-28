package shared

// FolderUpdateInput
// Object for updating folders.
type FolderUpdateInput struct {
	ID             string  `json:"id"`
	Name           *string `json:"name,omitempty"`
	ParentFolderID *int64  `json:"parentFolderId,omitempty"`
}
