package shared

type QuickPreviewResponse struct {
	CompilerError    *bool             `json:"compilerError"`
	ContainerVersion *ContainerVersion `json:"containerVersion"`
	SyncStatus       *SyncStatus       `json:"syncStatus"`
}
