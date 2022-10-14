package shared

type InstructionOutput struct {
	Codec               map[string]interface{} `json:"codec,omitempty"`
	Name                *string                `json:"name,omitempty"`
	OnlyCountKeyBytes   *bool                  `json:"onlyCountKeyBytes,omitempty"`
	OnlyCountValueBytes *bool                  `json:"onlyCountValueBytes,omitempty"`
	OriginalName        *string                `json:"originalName,omitempty"`
	SystemName          *string                `json:"systemName,omitempty"`
}
