package shared

type Client struct {
	AccountID      *string     `json:"accountId"`
	ClientID       *string     `json:"clientId"`
	ContainerID    *string     `json:"containerId"`
	Fingerprint    *string     `json:"fingerprint"`
	Name           *string     `json:"name"`
	Notes          *string     `json:"notes"`
	Parameter      []Parameter `json:"parameter"`
	ParentFolderID *string     `json:"parentFolderId"`
	Path           *string     `json:"path"`
	Priority       *int32      `json:"priority"`
	TagManagerURL  *string     `json:"tagManagerUrl"`
	Type           *string     `json:"type"`
	WorkspaceID    *string     `json:"workspaceId"`
}
