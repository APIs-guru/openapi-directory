package shared

type ParDoInstruction struct {
	Input            *InstructionInput      `json:"input"`
	MultiOutputInfos []MultiOutputInfo      `json:"multiOutputInfos"`
	NumOutputs       *int32                 `json:"numOutputs"`
	SideInputs       []SideInputInfo        `json:"sideInputs"`
	UserFn           map[string]interface{} `json:"userFn"`
}
