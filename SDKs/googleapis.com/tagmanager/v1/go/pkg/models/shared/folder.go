package shared

type Folder struct {
	AccountID   *string `json:"accountId"`
	ContainerID *string `json:"containerId"`
	Fingerprint *string `json:"fingerprint"`
	FolderID    *string `json:"folderId"`
	Name        *string `json:"name"`
}
