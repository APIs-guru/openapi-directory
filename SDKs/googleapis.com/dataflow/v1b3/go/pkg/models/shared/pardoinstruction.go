package shared



type ParDoInstruction struct {
    Input *InstructionInput `json:"input,omitempty"`
    MultiOutputInfos []MultiOutputInfo `json:"multiOutputInfos,omitempty"`
    NumOutputs *int32 `json:"numOutputs,omitempty"`
    SideInputs []SideInputInfo `json:"sideInputs,omitempty"`
    UserFn map[string]interface{} `json:"userFn,omitempty"`
    
}

