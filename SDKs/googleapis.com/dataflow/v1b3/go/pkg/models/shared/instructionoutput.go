package shared

type InstructionOutput struct {
	Codec               map[string]interface{} `json:"codec"`
	Name                *string                `json:"name"`
	OnlyCountKeyBytes   *bool                  `json:"onlyCountKeyBytes"`
	OnlyCountValueBytes *bool                  `json:"onlyCountValueBytes"`
	OriginalName        *string                `json:"originalName"`
	SystemName          *string                `json:"systemName"`
}
