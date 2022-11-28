package shared

// CreateContainerVersionResponse
// Create container versions response.
type CreateContainerVersionResponse struct {
	CompilerError    *bool             `json:"compilerError,omitempty"`
	ContainerVersion *ContainerVersion `json:"containerVersion,omitempty"`
	NewWorkspacePath *string           `json:"newWorkspacePath,omitempty"`
	SyncStatus       *SyncStatus       `json:"syncStatus,omitempty"`
}
