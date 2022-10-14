package shared

type PartialGroupByKeyInstruction struct {
	Input                               *InstructionInput      `json:"input,omitempty"`
	InputElementCodec                   map[string]interface{} `json:"inputElementCodec,omitempty"`
	OriginalCombineValuesInputStoreName *string                `json:"originalCombineValuesInputStoreName,omitempty"`
	OriginalCombineValuesStepName       *string                `json:"originalCombineValuesStepName,omitempty"`
	SideInputs                          []SideInputInfo        `json:"sideInputs,omitempty"`
	ValueCombiningFn                    map[string]interface{} `json:"valueCombiningFn,omitempty"`
}
