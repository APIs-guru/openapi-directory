package shared

type Workspace struct {
	AccountID     *string `json:"accountId,omitempty"`
	ContainerID   *string `json:"containerId,omitempty"`
	Description   *string `json:"description,omitempty"`
	Fingerprint   *string `json:"fingerprint,omitempty"`
	Name          *string `json:"name,omitempty"`
	Path          *string `json:"path,omitempty"`
	TagManagerURL *string `json:"tagManagerUrl,omitempty"`
	WorkspaceID   *string `json:"workspaceId,omitempty"`
}
