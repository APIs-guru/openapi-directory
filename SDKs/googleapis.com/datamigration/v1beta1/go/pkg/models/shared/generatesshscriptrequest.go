package shared

type GenerateSSHScriptRequest struct {
	VM                *string            `json:"vm"`
	VMCreationConfig  *VMCreationConfig  `json:"vmCreationConfig"`
	VMPort            *int32             `json:"vmPort"`
	VMSelectionConfig *VMSelectionConfig `json:"vmSelectionConfig"`
}
