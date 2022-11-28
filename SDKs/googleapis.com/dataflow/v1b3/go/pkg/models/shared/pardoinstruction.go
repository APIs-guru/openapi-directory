package shared

// ParDoInstruction
// An instruction that does a ParDo operation. Takes one main input and zero or more side inputs, and produces zero or more outputs. Runs user code.
type ParDoInstruction struct {
	Input            *InstructionInput      `json:"input,omitempty"`
	MultiOutputInfos []MultiOutputInfo      `json:"multiOutputInfos,omitempty"`
	NumOutputs       *int32                 `json:"numOutputs,omitempty"`
	SideInputs       []SideInputInfo        `json:"sideInputs,omitempty"`
	UserFn           map[string]interface{} `json:"userFn,omitempty"`
}
