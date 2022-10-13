package shared

type FolderInput struct {
	Name           string  `json:"name"`
	ParentFolderID *string `json:"parentFolderId"`
	ParentPath     *string `json:"parentPath"`
}
