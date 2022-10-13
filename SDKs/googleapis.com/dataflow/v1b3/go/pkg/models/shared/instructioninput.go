package shared

type InstructionInput struct {
	OutputNum                *int32 `json:"outputNum"`
	ProducerInstructionIndex *int32 `json:"producerInstructionIndex"`
}
