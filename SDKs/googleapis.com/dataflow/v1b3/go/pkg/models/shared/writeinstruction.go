package shared

type WriteInstruction struct {
	Input *InstructionInput `json:"input"`
	Sink  *Sink             `json:"sink"`
}
