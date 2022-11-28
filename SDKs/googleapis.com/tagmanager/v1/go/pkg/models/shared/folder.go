package shared

// Folder
// Represents a Google Tag Manager Folder.
type Folder struct {
	AccountID   *string `json:"accountId,omitempty"`
	ContainerID *string `json:"containerId,omitempty"`
	Fingerprint *string `json:"fingerprint,omitempty"`
	FolderID    *string `json:"folderId,omitempty"`
	Name        *string `json:"name,omitempty"`
}
