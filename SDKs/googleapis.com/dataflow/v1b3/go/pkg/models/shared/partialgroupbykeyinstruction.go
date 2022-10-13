package shared

type PartialGroupByKeyInstruction struct {
	Input                               *InstructionInput      `json:"input"`
	InputElementCodec                   map[string]interface{} `json:"inputElementCodec"`
	OriginalCombineValuesInputStoreName *string                `json:"originalCombineValuesInputStoreName"`
	OriginalCombineValuesStepName       *string                `json:"originalCombineValuesStepName"`
	SideInputs                          []SideInputInfo        `json:"sideInputs"`
	ValueCombiningFn                    map[string]interface{} `json:"valueCombiningFn"`
}
