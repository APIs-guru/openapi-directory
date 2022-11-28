package shared

// QuickPreviewResponse
// Response to quick previewing a workspace.
type QuickPreviewResponse struct {
	CompilerError    *bool             `json:"compilerError,omitempty"`
	ContainerVersion *ContainerVersion `json:"containerVersion,omitempty"`
	SyncStatus       *SyncStatus       `json:"syncStatus,omitempty"`
}
