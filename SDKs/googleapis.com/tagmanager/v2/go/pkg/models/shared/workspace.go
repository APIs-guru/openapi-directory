package shared

type Workspace struct {
	AccountID     *string `json:"accountId"`
	ContainerID   *string `json:"containerId"`
	Description   *string `json:"description"`
	Fingerprint   *string `json:"fingerprint"`
	Name          *string `json:"name"`
	Path          *string `json:"path"`
	TagManagerURL *string `json:"tagManagerUrl"`
	WorkspaceID   *string `json:"workspaceId"`
}
