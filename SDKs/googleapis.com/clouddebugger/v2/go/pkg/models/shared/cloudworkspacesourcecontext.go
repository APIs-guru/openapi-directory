package shared

type CloudWorkspaceSourceContext struct {
	SnapshotID  *string           `json:"snapshotId,omitempty"`
	WorkspaceID *CloudWorkspaceID `json:"workspaceId,omitempty"`
}
