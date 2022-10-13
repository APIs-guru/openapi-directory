package shared

type CloudWorkspaceSourceContext struct {
	SnapshotID  *string           `json:"snapshotId"`
	WorkspaceID *CloudWorkspaceID `json:"workspaceId"`
}
