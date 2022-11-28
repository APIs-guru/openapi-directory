package shared

// GenerateSSHScriptRequest
// Request message for 'GenerateSshScript' request.
type GenerateSSHScriptRequest struct {
	VM                *string            `json:"vm,omitempty"`
	VMCreationConfig  *VMCreationConfig  `json:"vmCreationConfig,omitempty"`
	VMPort            *int32             `json:"vmPort,omitempty"`
	VMSelectionConfig *VMSelectionConfig `json:"vmSelectionConfig,omitempty"`
}
