package shared

// InstructionInput
// An input of an instruction, as a reference to an output of a producer instruction.
type InstructionInput struct {
	OutputNum                *int32 `json:"outputNum,omitempty"`
	ProducerInstructionIndex *int32 `json:"producerInstructionIndex,omitempty"`
}
