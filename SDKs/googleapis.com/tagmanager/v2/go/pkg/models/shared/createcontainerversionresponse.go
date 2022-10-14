package shared

type CreateContainerVersionResponse struct {
	CompilerError    *bool             `json:"compilerError,omitempty"`
	ContainerVersion *ContainerVersion `json:"containerVersion,omitempty"`
	NewWorkspacePath *string           `json:"newWorkspacePath,omitempty"`
	SyncStatus       *SyncStatus       `json:"syncStatus,omitempty"`
}
