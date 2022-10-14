package shared

type Folder struct {
	AccountID     *string `json:"accountId,omitempty"`
	ContainerID   *string `json:"containerId,omitempty"`
	Fingerprint   *string `json:"fingerprint,omitempty"`
	FolderID      *string `json:"folderId,omitempty"`
	Name          *string `json:"name,omitempty"`
	Notes         *string `json:"notes,omitempty"`
	Path          *string `json:"path,omitempty"`
	TagManagerURL *string `json:"tagManagerUrl,omitempty"`
	WorkspaceID   *string `json:"workspaceId,omitempty"`
}
