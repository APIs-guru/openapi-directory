package shared

type CreateContainerVersionResponse struct {
	CompilerError    *bool             `json:"compilerError"`
	ContainerVersion *ContainerVersion `json:"containerVersion"`
	NewWorkspacePath *string           `json:"newWorkspacePath"`
	SyncStatus       *SyncStatus       `json:"syncStatus"`
}
