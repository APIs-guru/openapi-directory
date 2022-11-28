package shared

// CloudWorkspaceSourceContext
// A CloudWorkspaceSourceContext denotes a workspace at a particular snapshot.
type CloudWorkspaceSourceContext struct {
	SnapshotID  *string           `json:"snapshotId,omitempty"`
	WorkspaceID *CloudWorkspaceID `json:"workspaceId,omitempty"`
}
